import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";

export function Cta() {
    return (
        <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-12 px-8 md:px-16 text-center lg:py-20 lg:px-24 mb-8 md:mb-12 lg:mb-0 lg:ml-20 lg:mr-20 rounded-lg shadow-lg">
            <h1 className="text-white text-4xl lg:text-5xl leading-normal mb-4 lg:mb-6 font-bold">
                Monitor Your Website Like a Pro
            </h1>
            <p className="text-white text-lg lg:text-xl mb-8 lg:mb-10">
                Join over 800+ happy site owners boosting productivity and efficiency!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <button className="py-3 px-8 md:px-12 bg-white rounded-full text-pink-500 mb-6 md:mb-0 md:mr-4 text-lg font-medium shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    Try for Free
                </button>
                <button className="flex items-center gap-2 text-white text-lg font-medium hover:text-gray-200 transition duration-300 ease-in-out">
                    Contact Sales
                    <span className="h-6 w-6">
                        <Image src={Arrow} alt="Arrow Icon" />
                    </span>
                </button>
            </div>
        </div>
    );
}


