

const ServiceCard = ({servicee}) => {

    const {id,title,image,price,description,buttonColor}= servicee || {}



    return (
        <div>
            <div className="relative flex p-5 m-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-2xl font-semibold bg-sky-400 text-white rounded-md px-3 leading-relaxed text-blue-gray-900 antialiased">
                            {/* Apple AirPods */}
                            {title}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {/* $95.00 */}
                            {price}
                        </p>
                    </div>
                    <p className="block font-sans text-base font-medium leading-normal text-gray-700 antialiased opacity-75">
                        {/* With plenty of talk and listen time, voice-activated Siri access, and an */}
                        {/* available wireless charging case. */}
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="block mx-auto bg-amber-400 text-indigo-600 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6  align-middle font-sans text-2xl text-center font-bold text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Show Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;