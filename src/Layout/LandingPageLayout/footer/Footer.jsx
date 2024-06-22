import React from "react";
import CompanyLogo from "../../../components/companyLogo/CompanyLogo";
import FooterLinks from "./footerlinks/FooterLinks";
import { InternalNavlink } from "../../../components/Link/Link";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter } from "react-icons/fa6";
import Copyright from "./copyright/Copyright";
import { FooterLinksConfig, FooterLinksConfig1 } from "./footerConfig";


function Footer() {
    return (
        <div className="dark:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-10 pt-5">
                    <div className="py-8 px-4">
                        <CompanyLogo img 
                            classname={"h-auto w-48 dark:fill-primary"}
                        />
                        <p className="text-gray-600 dark:text-white/70
                        lg:pr-24">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Illum, fugit.
                        </p>
                        <InternalNavlink to={"#"} target="_blank"
                            className={"inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"}
                        >
                            Visit our Instagram Page
                        </InternalNavlink>
                    </div>
                    <div className="col-span-2 grid grid-cols-2
                        sm:grid-cols-3 md:pl-10">
                        <FooterLinks title={"Important Links"} configFile={FooterLinksConfig}/>
                        <FooterLinks title={"Quick Links"} configFile={FooterLinksConfig1}/>
                        {/* company address */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-bold sm:text-left mb-3">
                                Address
                            </h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Lagos, Nigeria</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <a href="tel:+2349060173264">Call our customer service</a>
                                </div>
                                <div 
                                    className="flex items-center   gap-3 mt-6">
                                    <InternalNavlink to={"#"} target="_blank">
                                        <FaInstagram className="text-3-xl hover:text-primary
                                        duration-300"/>
                                    </InternalNavlink>
                                    <InternalNavlink to={"#"} target="_blank">
                                        <FaFacebook className="text-3-xl hover:text-primary
                                        duration-300"/>
                                    </InternalNavlink>
                                    <InternalNavlink to={"#"} target="_blank">
                                        <FaTwitter className="text-3-xl hover:text-primary
                                        duration-300"/>
                                    </InternalNavlink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;
