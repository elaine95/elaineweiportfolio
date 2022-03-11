import './intro.scss';
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro(){
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: false,
            strings: ["Software Engineer", "Test Automation Engineer"],
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true 
        })
    }, [])
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/ProfilePic.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, my name is</h2>
                    <h1>Elaine Wei, I'm a</h1>
                    <h3>
                        <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}