import React from "react";
import FooterLinks from "./footerlinks/FooterLinks";
import Copyright from "./copyright/Copyright";
import { FooterLinksConfig, FooterLinksConfig1 } from "./footerConfig";
import FooterHead from "./footerhead/FooterHead";
import Address from "./address/Address";


function Footer({handleHowToOrderPopup}) { 
    return (
        <div className="dark:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-10 pt-5">
                    <FooterHead />
                    <div className="col-span-2 grid grid-cols-2
                        sm:grid-cols-3 md:pl-10">
                        <FooterLinks title={"Important Links"} configFile={FooterLinksConfig}/>
                        <FooterLinks handleHowToOrderPopup={handleHowToOrderPopup} title={"Quick Links"} configFile={FooterLinksConfig1}/>
                        <Address />
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;
