import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
function Header() {
    return (
        <div className="w-full bg-black text-white h-24 px-44 relative">
            <div className="w-full h-24 max-w-5xl flex absolute">
                <div className="absolute z-30 top-0">
                    <img
                        className="w-44 h-36"
                        src="http://live.envalab.com/html/the-farm-house/img/logo.png"
                        alt="Logo"
                    />
                </div>
                <div className="w-full absolute ml-32 pt-4">
                    <ul className="flex justify-evenly items-center leading-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Prices</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/">FAQ'S</a></li>
                        <li><a href="/">Tesnimotials</a></li>
                        <li><a href="/">App</a></li>
                        <li className="pt-2 pb-2">
                            <button className="bg-orange-600 p-5 rounded-full">
                                <a href="/">
                                    <span>
                                        <BsPencilSquare />
                                    </span>
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
