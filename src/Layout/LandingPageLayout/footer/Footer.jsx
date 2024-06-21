import React from "react";
import CompanyLogo from "../../../components/companyLogo/CompanyLogo";
import FooterLinks from "./footerlinks/FooterLinks";
import { ABOUT, CONTACT, HOME, TERMS } from "../../../routes/RouteConstants"

const FooterLinksConfig = [
    {
        title: "Home",
        link: HOME
    },
    {
        title: "About",
        link: ABOUT
    },
    {
        title: "Contact",
        link: CONTACT
    },
    {
        title: "Terms",
        link: TERMS
    },
]
function Footer() {
    return (
        <div className="dark:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className="py-8 px-4">
                        <CompanyLogo img 
                            classname={"h-auto w-48 dark:fill-primary"}
                        />
                    </div>
                    <div className="col-span-2 grid grid-cols-2
                    sm:grid-cols-3 md:pl-10">
                        <FooterLinks title={"important Links"} configFile={FooterLinksConfig}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
