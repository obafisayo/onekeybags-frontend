import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../../components/container/Container";
import Nav from "../nav/Nav";
import CompanyLogo from "../../../components/companyLogo/CompanyLogo";
import SearchBar from "../../../components/searchBar/SearchBar";
import DarkMode from "../../../components/darkMode/DarkMode";
import CartButton from "../../../components/cartButton/CartButton";
import Hamburger from "../../../components/hamburger/Hamburger";

export const CloseContext = React.createContext(null);

function Header({handleHowToOrderPopup}) {
    const [close, setClose] = useState(false);
    return (
        <StyledHeader className="bg-white dark:bg-gray-900 
        dark:text-white duration-200 relativez z-40">
            <div className="py-4">
                <CloseContext.Provider value={{close, setClose}}>
                    <Container classname={"flex justify-between items-center"}>
                        <div className="flex items-center gap-4">
                            <CompanyLogo
                                classname={"h-auto w-48 dark:fill-blue-600"}
                                text="Onekey bags"
                            />
                            <Nav handleHowToOrderPopup={handleHowToOrderPopup} />
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <SearchBar />
                            <CartButton />
                            <DarkMode />
                            <Hamburger />
                        </div>
                    </Container>
                </CloseContext.Provider>
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
`;

export default Header;
