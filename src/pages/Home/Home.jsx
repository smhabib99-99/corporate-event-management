import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ClientTestimonial from "../../components/ClientTestimonial/ClientTestimonial";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Service from "../Service/Service";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Home = () => {

    const service = useLoaderData()
    // console.log(service);


    const authInfo = useContext(AuthContext);
    console.log(authInfo);

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <Services></Services>
            <Service service={service}></Service>
            <ClientTestimonial></ClientTestimonial>
            <ContactUs></ContactUs>
            {/* <Footer></Footer> */}
            
        </div>
    );
};

export default Home;