import img from '../assets/mockup.png'

const ReviewSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#3A198A] to-[#9D7FDB] py-10 lg:flex gap-40 items-center justify-center">
            <div>
                <h2 className="text-4xl font-bold">Better, Faster, Authentic, Prompt Library</h2>
              <div className="flex justify-center">
              <button className="bg-slate-800 py-[10px] px-8 rounded my-10">Get started. It&apos;s Free</button>
              </div>
            </div>
            <img width={500} src={img} alt="" />
        </div>
    );
};

export default ReviewSection;