import { FaGithubSquare, FaInstagramSquare, FaLinkedin    } from "react-icons/fa";
import IconWrapper from "./IconWrapper";


const SocialMediaList = () =>{
    return(
        <ul className="socialMediaList flex flex-row gap-3 grow justify-center p-0 m-0">
            <li><IconWrapper newTab={true} url="http://google.ca" icon={<FaGithubSquare/>}/></li>
            <li><IconWrapper newTab={true} url="http://google.ca" icon={<FaInstagramSquare />}/></li>
            <li><IconWrapper newTab={true} url="http://google.ca" icon={<FaLinkedin />}/></li>
        </ul>
    );
}

export default SocialMediaList;