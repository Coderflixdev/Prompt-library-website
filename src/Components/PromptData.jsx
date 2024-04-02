import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LuClipboardCopy } from "react-icons/lu";

const PromptData = (item) => {
    const [expanded, setExpanded] = useState(false);
    const [copied, setCpoied] = useState('')
    const {title, description, tags} = item.item;

    const handleClick = async () => {
        if('clipboard' in navigator) {
            await navigator.clipboard.writeText(description)
            setCpoied('Write-text')
        }

        {copied === 'Write-text' ? toast('✅ Cpoied') : ''}

    }
    return (
        <div className="border border-slate-800 p-10 rounded-xl text-white">
            <div className="flex gap-2 items-center justify-between mb-6">
                <h3 className="text-2xl">{title}</h3>
                <button className="p-2" onClick={handleClick}><LuClipboardCopy className="text-xl text-gray-300"/></button>
            </div>
            <p>{!expanded ? description.slice(0, 40) + '..' : description}</p>
            <button className="bg-blue-600 py-[5px] px-[10px] rounded-[20px] my-6"  onClick={() => setExpanded(!expanded)}>{expanded ? 'Read Less' : 'Read More' }</button>
            
           <div className="flex gap-2">
            {
            tags && tags.map((item, index) => <span className='bg-gray-800/40 p-2 text-[10px] rounded border border-gray-700' key={index}>{item}</span>)
            }
            </div>
            <Toaster/>
        </div>
    );
};

export default PromptData;