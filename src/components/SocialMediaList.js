import { FaGithubSquare, FaInstagramSquare, FaLinkedin    } from "react-icons/fa";
import IconWrapper from "./IconWrapper";


const SocialMediaList = () =>{
    return(
        <ul className="socialMediaList flex flex-row gap-3 grow justify-center p-0 m-0">
            <li><IconWrapper newTab={true} url="https://github.com/DevClarkMiller" icon={<FaGithubSquare/>}/></li>
            <li><IconWrapper newTab={true} url="https://www.instagram.com/c1arkmiller/?next=%2F" icon={<FaInstagramSquare />}/></li>
            <li><IconWrapper newTab={true} url="https://www.linkedin.com/in/clark-miller-b14718290/" icon={<FaLinkedin />}/></li>
        </ul>
    );
}

export default SocialMediaList;