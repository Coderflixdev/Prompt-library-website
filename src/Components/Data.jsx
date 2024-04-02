import { Link } from "react-router-dom";


const Data = (data) => {
    const {img, title, category} = data.data;
    return (
        <Link to={`/prompt/${category}`}>
        <div className="border border-slate-800 p-10 rounded-xl">
            <div className="flex gap-4 items-center mb-4">
                <img className="w-10 h-10" src={img} alt="" />
                <h3 className="text-xl">{title}</h3>
            </div>
            <p className="text-gray-400">Custom agent roles in LiveAgent enable assigning specialized roles to agents.</p>
            </div>
            </Link>
    );
};

export default Data;