import './experience.scss';
import { Timeline, Event } from "react-timeline-scribble";
import React, { Fragment } from "react";



export default function Experience(){
    return(
        <div className="experience" id="experience">         
            <Fragment>
                <h1>Where I've Worked</h1>
                <Timeline>
                    <Event interval={"2020 - Present"} title={"Ceridian"} subtitle={"Senior Software Developer In Test"}>
                        Ceridian is an HCM Company that provides Payroll, Talent, HR, Timesheet solutions. I am part of HR Development team
                        and focusing on test automation. I design and lead an automation team to focus on implementing automation framework for complicated regression scenarios.
                        The framework is scalable and have been used by more than 6000 end to end UI test scenarios.  I provide support and training to team members to work on creating new test cases and framework enhancement tasks. 
                        Additionaly, I do research and provide my team more innovative testing strategies and more robusted way for automated deployment process.
                    </Event>
                    <Event interval={"2018 - 2020"} title={"Paymentus"} subtitle={"Automation Engineer"}>
                        Paymentus is a cloud company that provide E-payment solutions. I worked in Paymentus for one and half year and 
                        I worked within a small team to develop a new testing framework from scratch that works for UI, API and IVR autoamtions. 
                        The technologies we have used included Puppeteer, JavaScripts and NodeJs. I also had great exposure to work with 
                        devops team and I have gained good knowledge and experiences with cloud infrastructures including CI/CD, AWS, 
                        as well as the basics with Docker and Kubernetes.
                    </Event>
                </Timeline>
            </Fragment>
        </div>
    )
}