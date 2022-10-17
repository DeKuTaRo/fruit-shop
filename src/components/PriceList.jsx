import React from 'react';

function PriceList() {
    return (
        <div className="py-36 px-44">
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <div>
                        <table className="w-full border-2 border-solid border-slate-100 border-collapse">
                            <thead>
                                <tr className="bg-black bg-repeat bg-scroll text-white text-lg font-normal text-left">
                                    <th className="py-2.5 px-4">PRODUCT</th>
                                    <th className="py-2.5 px-4">PRICE</th>
                                </tr>
                            </thead>
                            <tbody className="py-2.5 px-5">
                                <tr className="border-b-2 border-solid border-slate-100">
                                    <td className="py-3.5 px-4">Asparagus</td>
                                    <td className="py-3.5 px-4">$4.50/bunch</td>
                                </tr>
                                <tr className="border-b-2 border-solid border-slate-100">
                                    <td className="py-3.5 px-4">Broccoli</td>
                                    <td className="py-3.5 px-4">$3.75/head</td>
                                </tr>
                                <tr className="border-b-2 border-solid border-slate-100">
                                    <td className="py-3.5 px-4">Green Onion</td>
                                    <td className="py-3.5 px-4">$3/bunch</td>
                                </tr>
                                <tr className="border-b-2 border-solid border-slate-100">
                                    <td className="py-3.5 px-4">Carrots</td>
                                    <td className="py-3.5 px-4">$3/bunch</td>
                                </tr>
                                <tr className="border-b-2 border-solid border-slate-100">
                                    <td className="py-3.5 px-4">Hot Peppers</td>
                                    <td className="py-3.5 px-4">$3.5/bunch</td>
                                </tr>
                                <tr className="border-b-2 border-solid border-slate-100">
                                    <td className="py-3.5 px-4">Sweet Potato</td>
                                    <td className="py-3.5 px-4">$2/lb.</td>
                                </tr>
                                <tr className="border-b-2 border-solid border-slate-100">
                                    <td className="py-3.5 px-4">Zucchini</td>
                                    <td className="py-3.5 px-4">$1/piece</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 className="mt-4 mb-6 text-orange-600 text-6xl relative italic priceListTitle">Price List</h2>
                    <h4 className="leading-[1.875rem] text-lg mb-7">
                        We grow over 50 different crops & several varieties of each item; this is just a partial list.
                    </h4>
                    <h4 className="leading-[1.875rem] text-lg mb-7">
                        These prices are subject to change without notice.{' '}
                        <a href="/" className="text-orange-600 underline">
                            Pictures shown
                        </a>{' '}
                        are from the seed catalogue websites.
                    </h4>
                    <div>
                        <a
                            href="/"
                            className="text-white bg-black inline-block text-lg py-3 px-10 mt-5 shadow-[7px_7px_0_rgb(214,214,214)] transition-all delay-[0ms] hover:bg-orange-600"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceList;
