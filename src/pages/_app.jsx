import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "components/layouts/MainLayout/MainLayout";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/font.css";
import "../styles/globals.css";

const ToastProvider = dynamic(
  () => import("components/wrappers/ToastWrapper/ToastWrapper"),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      disable: () => window.innerWidth < 768, 
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [router.asPath]);

  return (
    <MainLayout>
      <Component {...pageProps} />
      <ToastProvider />
      <SpeedInsights />
      <Analytics />
    </MainLayout>
  );
}
export default MyApp;