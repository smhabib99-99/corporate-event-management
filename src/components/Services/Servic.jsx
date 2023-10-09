import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServicCard from "./ServicCard";


const Servic = () => {

    
    const [servic, setServic] = useState()
    const { id } = useParams()
    // console.log(id);

    const service = useLoaderData()
    // console.log(service);

    useEffect(() => {

        const findService = service.find(servic => servic.id == id)
        // console.log(findService);

        setServic(findService)

    }, [id, service])

    return (
        <div className="flex justify-center items-center h-screen" >

           <ServicCard servic={servic} key={id}></ServicCard>
        </div>
    );
};

export default Servic;