import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function LatestProducts() {
    return (
        <div className="bg-slate-100 pt-36 pb-24 px-44">
            <div className="w-full px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="bg-['http://live.envalab.com/html/the-farm-house/img/title-bg.png'] bg-no-repeat bg-center text-6xl">
                        Latest Products
                    </h2>
                    <h4 className="mt-2.5 text-lg">Directly from the farm, freshly grown for our clients.</h4>
                </div>
                <div className="text-center">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div class="grid grid-rows-2 grid-flow-col gap-2">
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="grid grid-rows-2 grid-flow-col gap-2">
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="grid grid-rows-2 grid-flow-col gap-2">
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="grid grid-rows-2 grid-flow-col gap-2">
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-3.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="
                                bg-white bg-repeat bg-center bg-scroll h-60 leading-[15.5rem] mb-8 relative border-2 border-solid border-transparent
                                flex imageLatestProduct overflow-hidden max-w-full 
                                "
                                >
                                    <div className="">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/product-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="align-middle inline-block mt-14 z-10 absolute right-14">
                                        <img
                                            src="http://live.envalab.com/html/the-farm-house/img/latest-products/pro-icon-4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute top-2 left-16 hidden btnSeeProduct">
                                        <a
                                            className="bg-orange-500 bg-repeat bg-scroll text-white inline-block py-2 px-10 text-xl rounded-full shadow-[8px_8px_0_rgb(255,67,1/20%)]"
                                            href="/"
                                        >
                                            See product
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default LatestProducts;
