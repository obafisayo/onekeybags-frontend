import { useEffect, useState } from "react";
import { Navigate, useParams, useRoutes } from "react-router-dom";

// Routes import
import { 
    ABOUT,
    ABS,
    ACCOUNT,
    BACKPACKS,
    CONTACT,
    FAQS,
    FORGOT_PASSWORD,
    HANDBAGS,
    HOME,
    HOWTOORDER,
    LAPTOPBAGS,
    LUGGAGE,
    NOTFOUND,
    PC,
    PP,
    PRIVACY,
    PRODUCTS,
    PU,
    SECURITY,
    SIGNIN,
    SIGNUP,
    SIGNUP_OTP,
    TERMS,
    TRAVELSPORTSBAGS,
} from "./RouteConstants";

// Pages import
import Home from "../pages/LandingPage/home/Home";
import NotFound404 from "../pages/LandingPage/NotFound";
import LandingPageLayout from "../Layout/LandingPageLayout/LandingPageLayout";
import About from "../pages/LandingPage/about/About";
import Contact from "../pages/LandingPage/contact/Contact";
import AbsBox from "../pages/LandingPage/luggage/abs_box/Abs_box";
import PpBox from "../pages/LandingPage/luggage/pp_box/Pp_box";
import PuBox from "../pages/LandingPage/luggage/pu_box/Pu_box";
import PcBox from "../pages/LandingPage/luggage/pc_box/Pc_box";
import Luggage from "../pages/LandingPage/luggage/Luggage";
import Backpacks from "../pages/LandingPage/backpacks/Backpacks";
import TravelNsports from "../pages/LandingPage/backpacks/travelnsports/TravelNsports";
import Handbags from "../pages/LandingPage/backpacks/handbags/Handbags";
import LaptopBags from "../pages/LandingPage/backpacks/laptopbags/LaptopBags";
import ForgotPassword from "../pages/AuthPage/ForgotPassword";
import CreateAcct from "../pages/AuthPage/CreateAcct";
import Signin from "../pages/AuthPage/Signin";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Faq from "../pages/LandingPage/faq/Faq";
import Terms from "../pages/LandingPage/terms/Terms";
import Privacy from "../pages/LandingPage/privacy/Privacy";
import Security from "../pages/LandingPage/security/Security";

export default function Router() {
    function FindIdConfigDetails({ config }) {
        const { id } = useParams();
        const [data, setData] = useState(null);
    
        useEffect(() => {
            const foundItem = config.find((item) => item.id === id);
            setData(foundItem)
        }, [id, config]);
        console.log(data);
        // return <ProposalDetails config={data} />;
    }
    return useRoutes([
        {
            path: HOME,
            element: <LandingPageLayout />,
            children: [
                {
                    path: HOME,
                    element: <Home />
                },
                {
                    path: ABOUT,
                    element: <About />
                },
                {
                    path: CONTACT,
                    element: <Contact />
                },
                {
                    path: FAQS,
                    element: <Faq />
                },
                {
                    path: HOWTOORDER,
                    element: <Faq />
                },
                {
                    path: TERMS,
                    element: <Terms />
                },
                {
                    path: PRIVACY,
                    element: <Privacy />
                },
                {
                    path: SECURITY,
                    element: <Security />
                },
                {
                    path: `${PRODUCTS}/:id`,
                    element: <FindIdConfigDetails />
                },
                {
                    path: LUGGAGE,
                    element: <Luggage />
                },
                {
                    path: ABS,
                    element: <AbsBox />
                },
                {
                    path: PP,
                    element: <PpBox />
                },
                {
                    path: PC,
                    element: <PcBox />
                },
                {
                    path: PU,
                    element: <PuBox />
                },
                {
                    path: BACKPACKS,
                    element: <Backpacks />
                },
                {
                    path: TRAVELSPORTSBAGS,
                    element: <TravelNsports />
                },
                {
                    path: HANDBAGS,
                    element: <Handbags />
                },
                {
                    path: LAPTOPBAGS,
                    element: <LaptopBags />
                }
            ]
        },
        {
            path: ACCOUNT,
            element: <AuthLayout />,
            children: [
                {
                    path: SIGNIN,
                    element: <Signin />
                },
                {
                    path: SIGNUP,
                    element: <CreateAcct />
                },
                {
                    path: FORGOT_PASSWORD,
                    element: <ForgotPassword />
                },
                {
                    path: SIGNUP_OTP,
                    element: <SIGNUP_OTP />
                },
                {
                    path: NOTFOUND, element: <NotFound404 />
                },
                {
                    path: '*', element: <Navigate to={`/${NOTFOUND}`} replace />
                }
            ]
        },
        { path: '*', element: <NotFound404 /> }
    ]);
}
