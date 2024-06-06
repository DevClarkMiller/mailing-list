import { useState, useEffect } from "react";
import { IoMdMailOpen, IoMdMail } from "react-icons/io";
import { TailSpin } from "react-loading-icons";
import CardWrapper from "./CardWrapper";
import mailboxImg from '../images/—Pngtree—mailbox email concept flat style_6858707.png'
import { ShakeLittle } from "reshake";

import { fetchPut } from "../functions/fetch";

const Content = () =>{
    //State for form
    const [email, setEmail] = useState("");
    const [addedSuccess, setAddedSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitEmail = async (e) =>{
        e.preventDefault();
        setLoading(true);

        const response = await fetchPut('email', {email: email});
        if(response.response){
            alert(response.response.data);
        }
        setLoading(false);
        setAddedSuccess(true);
        setTimeout(() =>{
            setAddedSuccess(false);
        }, 500);
    }

    return(
        <main className="flex flex-col items-center min-h-screen gap-5 grow">
            
            <CardWrapper className="w-5/6">
                <CardWrapper style={{backgroundColor: "#4dff97"}} className="mb-5">
                    <h2 className="text-4xl text-white font-bold text-center">Purpose</h2>
                </CardWrapper>
                <p className="text-center">The purpose of this project is to provide the parsed data from tech-alliance-jobs for lower-mid students at Fanshawe College who are in the computer programming and analysis program.</p>
            </CardWrapper>

            <CardWrapper className="w-5/6">
                <form className="flex gap-5 items-center" onSubmit={submitEmail}>
                    <label className="flex items-center text-xl h-full" htmlFor="email">Enter Email</label>
                    <input 
                        className="grow p-1 rounded-lg border-black border-2 h-full"
                        required 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="example@email.com"
                    />
                    <CardWrapper style={{padding: "4px"}} className="flex items-center justify-center w-fit h-full aspect-square">
                        <button type="submit" className="p-0 m-0 flex items-center justify-center text-3xl">{loading ? <TailSpin stroke="#FF5733"/> : addedSuccess ? <IoMdMail /> : <ShakeLittle><IoMdMailOpen /></ShakeLittle>}</button>
                    </CardWrapper>
                </form>
            </CardWrapper>
            <CardWrapper className="w-5/6">
                <img src={mailboxImg}></img>
            </CardWrapper>
        </main>
    );
}

export default Content;