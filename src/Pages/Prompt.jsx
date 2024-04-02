import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../public/data.json';
import PromptData from "../Components/PromptData";


const Prompt = () => {
    const {id} = useParams();
    const [newData, setNewData] = useState([])

    useEffect(() => {
        if(id === 'Web-Development'){
            data.filter(item => item.category === 'Web-Development' && setNewData(item.promptdata));
        }
        if(id === 'Poetry'){
            data.filter(item => item.category === 'Poetry' && setNewData(item.promptdata));
        }
        if(id === 'Doctor'){
            data.filter(item => item.category === 'Doctor' && setNewData(item.promptdata));
        }
        if(id === 'Financial-Analyst'){
            data.filter(item => item.category === 'Financial-Analyst' && setNewData(item.promptdata));
        }
    }, [])
   
    return (
        <div>
            <h2>Community Prompts</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-20 my-10">
                {
                    newData.length !== 0 && newData.map(item => <PromptData key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Prompt;