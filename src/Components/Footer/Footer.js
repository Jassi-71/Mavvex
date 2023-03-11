import React from "react";
import ItemsContainer from "./ItemsContainer";
import Socials from "./Socials";
import {Icons} from "./Menus";

const Footer = () => {
    return <footer className="bg-gray-900 text-white">
        <ItemsContainer/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm">
            <span>Terms · Privacy Policy</span>
            <span>admin@mavvexlabs.com</span>
            <Socials Icons={Icons}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-gray-400 text-sm pb-8">
            <span>© 2023 Copyright Apply. All rights reserved.</span>
            <span>1197 Sainik Colony Sector 49, Faridabad HR - 121001, India</span>
            <span></span>
        </div>
    </footer>
}

export default Footer;