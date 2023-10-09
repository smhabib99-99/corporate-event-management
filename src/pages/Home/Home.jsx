import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ClientTestimonial from "../../components/ClientTestimonial/ClientTestimonial";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Service from "../Service/Service";


const Home = () => {

    const service = useLoaderData()
    // console.log(service);



    return (
        <div>
            <Navbar></Navbar>
            {/* <h1 className="text-4xl font-Open Sans">From Home</h1> */}
            <Banner></Banner>
            <Services></Services>
            <Service service={service}></Service>
            <ClientTestimonial></ClientTestimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;