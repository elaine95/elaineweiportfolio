import { useState } from 'react';
import './contact.scss';



export default function Contact(){

    
    return(
        <div className="contact" id="contact">
            <div className="content">
                <h2>What's Next...</h2>
                <p> My inbox is always open! <br/> Feel free to contact me through email or LinkedIn if you want to chat more :)</p>
                         
            </div>
            <div className="footer">
                <div className="icon">
                    <a href="https://www.linkedin.com/in/elaine-wei-b1575390/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/LinkedInIcon.png" alt="LinkedIn"/>
                    </a>
                    <a href="https://github.com/elaine95" target="_blank" rel="noopener noreferrer">
                        <img src="assets/GithubIcon.png" alt="Github" />
                    </a>
                    <a href="mailto:elaine.huan.wei@gmail.com">
                        <img src="assets/MailIcon.png" alt="Email" />
                    </a>
                    <a href="https://www.instagram.com/elainewwwwww/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/InstaIcon.png" alt="Instagram" />
                    </a>
                </div>               
            </div>
        </div>
    )
}