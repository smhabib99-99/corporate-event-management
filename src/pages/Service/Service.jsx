import ServiceCard from "./ServiceCard";


const Service = ({service}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 my-5 w-full mx-auto">
                {
                    service?.map(servic=><ServiceCard key={servic.id} servic={servic}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;