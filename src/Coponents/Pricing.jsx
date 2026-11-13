import React, { useState } from "react";
import { BadgeCheck } from "lucide-react";

const features = [
    "Limited Acess Library",
    "100+ HTML UI Elements",
    "Hotline Support 24/7",
    "API & extension support",
];

const plans = [
    { name: "BASIC PLAN", price: 0, included: [true, false, false, false], featured: false },
    { name: "PREMIUM PLAN", price: 130, included: [true, true, false, false], featured: true },
    { name: "ULTIMATE PLAN", price: 210, included: [true, true, true, true], featured: false },
];

const Pricing = () => {
    const [quarterly, setQuarterly] = useState(false);
    const [slider, setSlider] = useState(130);

    const MAX = 210;
    const getPrice = (price) =>
        quarterly ? Math.round(price * 0.6) : price;

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1000px] px-6 py-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#0b1f17]">
                        Best Pricing Plan
                    </h2>
                    <p className="mx-auto mt-6 max-w-lg text-[#3d4a44]">
                        Empowering the Internet Generation. Driving the Communication
                        Revolution. Technology at the speed of life. Empowered by
                        Innovation.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-4 text-[#3d4a44]">
                        <span className={!quarterly ? "font-semibold" : ""}>Monthly</span>
                        <button
                            onClick={() => setQuarterly(!quarterly)}
                            className="flex h-7 w-14 items-center rounded-md bg-emerald-400 p-1"
                            aria-label="Toggle billing period"
                        >
                            <span
                                className={`h-5 w-6 rounded-sm bg-white transition-transform ${quarterly ? "translate-x-6" : "translate-x-0"
                                    }`}
                            />
                        </button>
                        <span className={quarterly ? "font-semibold" : ""}>Quarterly</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-[#0b1f17]">
                        Save up to 40%
                    </p>
                </div>

                {/* Slider */}
                <div className="relative mt-14 px-1">
                    <div
                        className="absolute -top-10 -translate-x-1/2 rounded bg-[#2b2b2b] px-3 py-1.5 text-sm font-semibold text-white"
                        style={{ left: `${(slider / MAX) * 100}%` }}
                    >
                        ${slider}
                    </div>
                    <input
                        type="range"
                        min="0"
                        max={MAX}
                        value={slider}
                        onChange={(e) => setSlider(Number(e.target.value))}
                        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-emerald-400"
                        style={{
                            background: `linear-gradient(to right, #34d399 ${(slider / MAX) * 100
                                }%, #f1f1f1 ${(slider / MAX) * 100}%)`,
                        }}
                    />
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-xl border border-[#e8ecef] bg-white ${plan.featured ? "py-4 shadow-2xl" : "shadow-sm"
                                }`}
                        >
                            <div className="px-6 pb-8 pt-10 text-center">
                                <p className="font-semibold tracking-wide text-[#6b7570]">
                                    {plan.name}
                                </p>
                                <p className="mt-6 text-5xl font-bold text-[#0b1f17]">
                                    ${getPrice(plan.price)}
                                </p>
                            </div>

                            <ul>
                                {features.map((f, i) => (
                                    <li
                                        key={f}
                                        className="flex items-center justify-between border-t border-[#eef1f3] px-6 py-4 text-sm"
                                    >
                                        <span
                                            className={`flex items-center gap-2 ${plan.included[i]
                                                    ? "text-[#0b1f17]"
                                                    : "text-[#6b7570] line-through"
                                                }`}
                                        >
                                            <BadgeCheck className="h-4 w-4 fill-emerald-400 text-white" />
                                            {f}
                                        </span>
                                        <span className="text-[#6b7570]">
                                            {plan.included[i] ? "Yes" : "No"}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="border-t border-[#eef1f3] px-6 py-8">
                                <button
                                    className={`w-full rounded-md py-3 font-medium transition ${plan.featured
                                            ? "bg-[#ef3b45] text-white hover:bg-[#d92d37]"
                                            : "border border-red-200 text-[#ef3b45] hover:bg-red-50"
                                        }`}
                                >
                                    Buy Plan
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing