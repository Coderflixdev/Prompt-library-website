import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {


    return (
        <footer className="relative text-white">
            <div className="absolute top-0 left-0 w-[100%] overflow-hidden">
                <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 pt-40 px-20">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl text-white">Footer</h1>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores
                            vel ipsa reiciendis corporis similique dolor earum aut itaque.
                        </p>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-white py-2 uppercase">
                            Creativity
                        </li>
                        <li className="my-4 list-none text-gray-400">Website Guidlines & Ideas</li>
                        <li className="my-4 list-none text-gray-400">Tips & Tricks</li>
                        <li className="my-4 list-none text-gray-400">photography</li>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-white py-2 uppercase">
                            Creativity</li>
                        <li className="my-4 list-none text-gray-400">Guidlines & Ideas</li>
                        <li className="my-4 list-none text-gray-400">Tips & Tricks</li>
                        <li className="my-4 list-none text-gray-400">photography</li>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-white py-2 uppercase">Contact</h2>
                        <p className="text-[16px] my-4">Email: youremail.gmail.com</p>
                        <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
                        <div className="flex space-x-4">
                            <a
                                className="text-white hover:text-white transform hover:scale-150 
                            transition-all duration-150 ease-in-out" href="">
                                <FaGithub />
                            </a>
                            <a
                                className="text-white hover:text-white transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaLinkedinIn />
                            </a>
                            <a
                                className="text-white hover:text-white transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaTwitter />
                            </a>
                            <a
                                className="text-white hover:text-white transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="h-full flex items-center justify-center mb-5">
                        <form className="w-96 relative">
                            <input type="email" placeholder=""
                                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-blue-400" />
                            <button
                                type="Submit"
                                className="bg-blue-500 px-8 py-2 rounded-full text-white
                                 absolute top-0 right-0"
                                >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <h6 className="text-center pb-4">Copy right Hiramon Nahar Eva 2023</h6>
            </div>
        </footer>
    );
};

export default Footer;