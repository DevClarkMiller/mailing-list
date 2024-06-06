import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CardWrapper from "./CardWrapper";
import SocialMediaList from "./SocialMediaList";

const Header = () =>{
    const [menuActive, setMenuActive] = useState(false);

    return(
        <header className="w-5/6 flex justify-center mb-2">
            {
                !menuActive &&
                <CardWrapper className="w-full flex items-center justify-between text-2xl sm:text-4xl md:text-5xl">
                    <RxHamburgerMenu onClick={() => setMenuActive(!menuActive)} className="hover:cursor-pointer" />
                    <h1 className="grow text-center select-none rubik">CVM - Mailing List</h1>
                </CardWrapper>      
            }
            {
                menuActive &&
                <CardWrapper className="w-full flex items-center justify-between text-4xl">
                    <RxHamburgerMenu onClick={() => setMenuActive(!menuActive)} className="hover:cursor-pointer" />
                    <SocialMediaList />
                </CardWrapper>
            }
            
        </header>
    );
}

export default Header;