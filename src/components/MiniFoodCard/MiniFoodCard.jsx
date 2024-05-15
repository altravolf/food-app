import './MiniFoodCard.scss';

function MiniFoodCard() {
    return (
        <div className="flex gap-5 items-center bg-white xl:w-64 w-50 p-2 border rounded-2xl MiniFoodCard">
            <div className="img-container-2 leading-none overflow-hidden  rounded-2xl ">
                <img src="/images/home/b-food1.png" className=" max-w-full xl:h-[5.3rem] lg:h-[5rem] md:h-auto sm:h-[4rem] " alt="food" />
            </div>

            <div className="">
                <div className="title font-semibold lg:text-base text-sm">Spicy Noodles</div>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="price lg:text-base text-sm"> <span className="text-light-red text-sm font-medium">$</span> 9.99</div>
            </div>
        </div>
    );
}

export default MiniFoodCard;
