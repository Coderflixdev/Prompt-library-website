import Lottie from "lottie-react";
import animation from "../../public/Animation - 1707657786469.json";
import data from '../../public/data.json';
import Data from "../Components/Data";
import ReviewSection from "../Components/ReviewSection";

const Home = () => {
    return (
        <div className="text-white">
            <h2 className="">Simple Prompt Library</h2>
            <p className="text-center mb-20 mt-4 mx-4 text-gray-400 text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quae?</p>
            <Lottie style={{ height: 500}} animationData={animation}/>
            <div>
                <h2>Fratured Powerful Prompts</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-10 mx-20 my-10">
                    {
                        data.map(data => <Data key={data.id} data={data}/>)
                    }
                </div>
            </div>
            <ReviewSection/>
        </div>
    );
};

export default Home;