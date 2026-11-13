import React from "react";

const usefulLinks = ["Behance", "Dribbble"];
const supportLinks = ["Conditions", "Privecy and policy"];

const Footer = () => {
    return (
        <footer className="bg-[#f0fdf8]">
            <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400">
                            <div className="h-2.5 w-2.5 rounded-full bg-white" />
                        </div>
                        <span className="text-sm font-bold tracking-tight text-emerald-500">
                            SOFT POINT
                        </span>
                    </div>
                    <p className="mt-4 max-w-[180px] text-sm leading-relaxed text-[#3d4a44]">
                        Software with new look. Live the life that you expect.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-medium text-[#3d4a44]">Useful link</h4>
                    <ul className="mt-4 space-y-3">
                        {usefulLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm text-[#3d4a44] transition hover:text-emerald-500"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-medium text-[#3d4a44]">Support</h4>
                    <ul className="mt-4 space-y-3">
                        {supportLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm text-[#3d4a44] transition hover:text-emerald-500"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-medium text-[#3d4a44]">Contact us</h4>
                    <ul className="mt-4 space-y-3 text-sm text-[#3d4a44]">
                        <li>(773) 217-8810</li>
                        <li>Downers Grove, IL 60515</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer