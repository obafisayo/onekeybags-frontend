import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export const TawkMessengerContext = React.createContext();

function TawkTo() {
    const tawkMessengerRef = useRef();

    // Function to minimize the Tawk Messenger
    function handleMaximize() {
        if (tawkMessengerRef.current && tawkMessengerRef.current.minimize) {
          const tawkMessengerEl = tawkMessengerRef.current;
          tawkMessengerEl.maximize();
        }
    }

    // Provide the Tawk Messenger reference to the context
    const value = {
        tawkMessengerRef,
        maximize: handleMaximize,
    };

    return (
        <TawkMessengerContext.Provider value={value}>
            <TawkMessengerReact
                propertyId="665b07549a809f19fb37a9ef"
                widgetId="1hv9p98po"
                ref={tawkMessengerRef}
            />
        </TawkMessengerContext.Provider>
    );
}

export default TawkTo
