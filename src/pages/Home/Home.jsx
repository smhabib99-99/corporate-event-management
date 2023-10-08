import Banner from "../../components/Banner/Banner";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <h1 className="text-4xl font-Open Sans">From Home</h1> */}
            <Banner></Banner>
            <Services></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;