import React from "react";
import ItemsContainer from "./ItemsContainer";
import Socials from "./Socials";
import {Icons} from "./Menus";

const Footer = () => {
    return <footer className="bg-gray-900 text-white">
        <ItemsContainer/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm mb-10 pb-8">
            <div>
                admin@mavvexlabs.com 
                <br />
                1197 Sainik Colony Sector 49, Faridabad HR - 121001, India
            </div>
            <div>
                Terms · Privacy Policy
                <br/>
                © 2023 Copyright Apply. All rights reserved.
            </div>
            <div>
                <Socials Icons={Icons}/>
            </div>
        </div>
    </footer>
}

export default Footer;