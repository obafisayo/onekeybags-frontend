import React, { useRef, useState } from 'react';
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Popup from '../../components/popup/Popup';

export const TawkMessengerContext = React.createContext();

function LandingPageLayout() {
    const tawkMessengerRef = useRef();
    const [howToOrderPopup, setHowToOrderPopup] = useState(false)

    const handleHowToOrderPopup = () => {
        setHowToOrderPopup(!howToOrderPopup);
    }
    console.log(howToOrderPopup);
    // Function to minimize the Tawk Messenger
    function handleMaximize() {
        if (tawkMessengerRef.current && tawkMessengerRef.current.minimize) {
          const tawkMessengerEl = tawkMessengerRef.current;
          tawkMessengerEl.toggle();
        }
    }

    // Provide the Tawk Messenger reference to the context
    const value = {
        tawkMessengerRef,
        maximize: handleMaximize,
    };
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white
        duration-200 overflow-hidden">
                <Header handleHowToOrderPopup={handleHowToOrderPopup}/>
                <main>
                    <TawkMessengerContext.Provider value={value}>
                        <Outlet />
                        <TawkMessengerReact
                            propertyId="665b07549a809f19fb37a9ef"
                            widgetId="1hv9p98po"
                            ref={tawkMessengerRef}
                        />
                    </TawkMessengerContext.Provider>
                </main>
                <Footer handleHowToOrderPopup={handleHowToOrderPopup}/>
                {/* <Popup howToOrderPopup={howToOrderPopup} setHowToOrderPopup={setHowToOrderPopup}/> */}
        </div>
    );
}

export default LandingPageLayout;