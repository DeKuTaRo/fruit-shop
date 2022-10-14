import React from 'react';

function About() {
    return (
        <div className="relative px-44 grid grid-cols-2 gap-2 pt-20 pb-28">
            <div>
                <h2 className="text-orange-600 text-7xl mb-6">About us</h2>
                <h3 className="text-black mb-10 text-lg">We have a lot of great new things for you but overall, the Farm Program we created in 2014 will remain.</h3>
                <h4 className="mb-5 text-lg">
                    <span className="mr-5 bg-black bg-scroll bg-repeat rounded-full text-white inline-block h-10 leading-10 text-center w-10">1</span>
                    Mon-Fri: 4-6pm, City Cyclery 553, Windsor
                </h4>
                <h4 className="mb-5 text-lg">
                    <span className="mr-5 bg-black bg-scroll bg-repeat rounded-full text-white inline-block h-10 leading-10 text-center w-10">2</span>
                    Sat-Sun: 8am-1pm, Downtown Windsor Market
                </h4>
            </div>

            <div>09</div>
        </div>
    );
}

export default About;
