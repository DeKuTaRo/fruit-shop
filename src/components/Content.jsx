import React from 'react';
import { VscSettingsGear } from 'react-icons/vsc';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import About from './About';
import LatestProducts from './LatestProducts';
import PriceList from './PriceList';
import ProductGallery from './ProductGallery';

function Content() {
    return (
        <>
            <div className="relative w-full">
                <img src="http://live.envalab.com/html/the-farm-house/img/welcome-bg.jpg" alt="bg-welcome" />
                <div className="absolute w-full h-24 grid grid-rows-3 grid-flow-col gap-4 top-52">
                    <div className="flex justify-center items-center ml-0 mt-5 mr-2.5 mb-6 bg-white row-span-3 ...">
                        <VscSettingsGear />
                    </div>
                    <div className="relative mr-44 ml-44 row-span-3 ...">
                        <img src="http://live.envalab.com/html/the-farm-house/img/transparent-bg.png" alt="" />
                        <div className="w-full absolute top-24 text-5xl text-center text-white italic">
                            <p>
                                <span className="text-orange-700 underline decoration-2 ...">Oragnics</span> products
                            </p>
                            <p>directly from the farm</p>
                        </div>
                    </div>
                    <div className=" row-span-3 ...">
                        <div className="flex justify-center items-center py-2.5 px-0 mb-2 bg-white">
                            <FaFacebookF />
                        </div>
                        <div className="flex justify-center items-center py-2.5 px-0 mb-2 bg-white">
                            <FaTwitter />
                        </div>
                        <div className="flex justify-center items-center py-2.5 px-0 mb-2 bg-white">
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <LatestProducts />
            <PriceList />
            <ProductGallery />
        </>
    );
}

export default Content;
