import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useRouter } from 'next/router';
import { contactFormSchema } from 'components/validations/contactForm.validation';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setError,
    } = useForm({
        resolver: zodResolver(contactFormSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    const onSubmit = async (data) => {
        if (!executeRecaptcha) {
            toast.error('reCAPTCHA not ready. Please try again.');
            return;
        }

        setIsSubmitting(true);

        try {
            const token = await executeRecaptcha('contact_form');

            const verifyResponse = await fetch('/api/verify-recaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            const verifyResult = await verifyResponse.json();

            if (!verifyResult.success) {
                if (
                    verifyResult.errors &&
                    typeof verifyResult.errors === 'object'
                ) {
                    Object.keys(verifyResult.errors).forEach((field) => {
                        const fieldName = field.toLowerCase();
                        const errorMessage = Array.isArray(
                            verifyResult.errors[field],
                        )
                            ? verifyResult.errors[field][0]
                            : verifyResult.errors[field];

                        if (
                            ['name', 'email', 'subject', 'message'].includes(
                                fieldName,
                            )
                        ) {
                            setError(fieldName, {
                                type: 'server',
                                message: errorMessage,
                            });
                        }
                    });
                }
                toast.error(
                    verifyResult.message ||
                        'Verification failed. Please try again.',
                );
                setIsSubmitting(false);
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append(
                'access_key',
                process.env.NEXT_PUBLIC_FORM_KEY,
            );
            formDataToSend.append('name', data.name);
            formDataToSend.append('email', data.email);
            formDataToSend.append('subject', data.subject);
            formDataToSend.append(
                'message',
                `Subject: ${data.subject}\n\n${data.message}`,
            );
            formDataToSend.append('from_name', data.name);

            const web3Response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    body: formDataToSend,
                },
            );

            const result = await web3Response.json();

            if (result.success) {
                toast.success(result.message || 'Message sent successfully!');
                reset();
                setTimeout(() => {
                    router.push('/thank-you');
                }, 1000);
            } else {
                if (result.errors && typeof result.errors === 'object') {
                    Object.keys(result.errors).forEach((field) => {
                        const fieldName = field.toLowerCase();
                        const errorMessage = Array.isArray(result.errors[field])
                            ? result.errors[field][0]
                            : result.errors[field];

                        if (
                            ['name', 'email', 'subject', 'message'].includes(
                                fieldName,
                            )
                        ) {
                            setError(fieldName, {
                                type: 'server',
                                message: errorMessage,
                            });
                        }
                    });
                    toast.error(
                        result.message || 'Please check the form for errors',
                    );
                } else {
                    toast.error(
                        result.message ||
                            'Failed to send message. Please try again.',
                    );
                }
            }
        } catch (error) {
            toast.error(
                'Unable to send your message. Please check your connection and try again.',
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-[500px] mx-auto">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-7 flex-wrap"
            >
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        className={`form-control ${
                            errors.name
                                ? 'border-red-500 focus:border-red-500'
                                : ''
                        }`}
                        {...register('name')}
                        disabled={isSubmitting}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-2 font-medium">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="w-full">
                    <input
                        type="email"
                        placeholder="Email"
                        className={`form-control ${
                            errors.email
                                ? 'border-red-500 focus:border-red-500'
                                : ''
                        }`}
                        {...register('email')}
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-2 font-medium">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Subject"
                        className={`form-control ${
                            errors.subject
                                ? 'border-red-500 focus:border-red-500'
                                : ''
                        }`}
                        {...register('subject')}
                        disabled={isSubmitting}
                    />
                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-2 font-medium">
                            {errors.subject.message}
                        </p>
                    )}
                </div>

                <div className="w-full">
                    <textarea
                        className={`form-control text-area ${
                            errors.message
                                ? 'border-red-500 focus:border-red-500'
                                : ''
                        }`}
                        placeholder="Message (minimum 20 characters)"
                        rows="5"
                        {...register('message')}
                        disabled={isSubmitting}
                    ></textarea>
                    <div className="flex justify-between items-start mt-2">
                        <div className="flex-1">
                            {errors.message && (
                                <p className="text-red-500 text-sm font-medium">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        <p className="text-sm text-grey ml-2">
                            {watch('message')?.length || 0}/1000
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <button
                        type="submit"
                        className={`btn outline w-full ${
                            isSubmitting
                                ? 'cursor-not-allowed pointer-events-none opacity-70'
                                : ''
                        }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
