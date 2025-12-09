import Footer from 'components/components/Footer/Footer';
import Header from 'components/components/Header/Header';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
