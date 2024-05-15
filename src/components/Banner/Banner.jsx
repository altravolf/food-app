import './Banner.scss';
import { FaPlay } from "react-icons/fa";
import MiniFoodCard from "../MiniFoodCard/MiniFoodCard";

function Banner() {
    return (
        <div className="Banner section-container bg-slate-50">
            <div className=" py-6 flex flex-col md:flex-row  items-center gap-8">
                <div className="flex-1">
                    <h2 className="font-bold text-4xl md:text-5xl leading-normal">
                        Dive into Delights Of Delectable <span className="text-light-green"> Food</span>
                    </h2>
                    <div className="text-2xl md:text-3xl leading-normal pt-8 font-medium text-secondary-black">
                        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                    </div>
                    <div className=" pt-8 inline-flex flex-row items-center flex-wrap justify-center sm:justify-start md:gap-4 gap-0">
                        <button className="btn h-fit bg-light-green rounded-full px-6 py-4  hover:shadow-xl hover:bg-light-green  hover:text-white text-xl">
                            Order Now
                        </button>
                        <button className="btn h-auto bg-transparent border-none shadow-none rounded-full py-4 text-xl ">
                            Watch Videos <span className=" border rounded-full p-4 text-lg hover:shadow-lg "> <FaPlay className="text-center" /> </span>
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="img-container">
                        <img src="/images/home/banner.png" className="w-full" alt="banner" />
                    </div>

                    <div className=" flex sm:gap-8 translate-y-[-2rem]  justify-center flex-wrap gap-3 md:translate-x-0  translate-x-7">

                        <MiniFoodCard />

                        <MiniFoodCard />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
