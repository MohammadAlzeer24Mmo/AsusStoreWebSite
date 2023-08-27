import React from 'react';
import { Fragment, useEffect, useState } from "react";
import "./AboutStyling/about.css";
import AboutProducts from "../Components/About-products";
import Client from "../Components/Client";

import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"
import { AiOutlineTwitter } from "react-icons/ai"
import { FiInstagram } from "react-icons/fi"
import { BsCheckLg } from "react-icons/bs"
import { MdDesignServices } from "react-icons/md"
import { BsCartCheck } from "react-icons/bs"
import { BsCurrencyDollar } from "react-icons/bs"
import { ImPower } from "react-icons/im"


import serviceImage1 from "../assets/images/images/About/photo2.jpg"
import serviceImage2 from "../assets/images/images/About/backpack.jpg"
import serviceImage3 from "../assets/images/images/About/keyboard.png"
import serviceImage4 from "../assets/images/images/About/powerfull.jpg"

import storyGoalImage from "../assets/images/images/About/asus-logo4.jpg"

import teamImage1 from "../assets/images/images/team/img_avatar3.png"
import teamImage2 from "../assets/images/images/team/pngtree-user-vector-avatar-png-image_1541962.jpg"
import teamImage3 from "../assets/images/images/team/images.jpg"
import teamImage4 from "../assets/images/images/team/4205906.png"

import clientImage1 from "../assets/images/images/clients/899048ab0cc455154006fdb9676964b3.jpg"
import clientImage2 from "../assets/images/images/clients/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
import clientImage3 from "../assets/images/images/clients/4086559.png"






const About = () => {
const [client,setClient] = useState("firstClient")
let comment = "Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea"

const changeClient = (event , clientNumber) => {
if(clientNumber === "firstClient"){
    setClient("firstClient")
}else if(clientNumber === "secondClient"){
    setClient("secondClient")
}else if(clientNumber === "thirdClient"){
    setClient("thirdClient")
}
}
const demoClients = [ "firstClient","secondClient","thirdClient"]
//   useEffect(() => {
//     let some
//     for(let i=0 ; i<3 ; i++){

//   some = setInterval(() => {
//     if (demoClients[i] === "firstClient") {
//       setClient("firstClient");
//     }
//     if (demoClients[i] === "secondClient") {
//         setClient("secondClient");
//       }
//       if (demoClients[i] === "thirdClient") {
//         setClient("thirdClient");
//         i=-1;
//       }

   
//       i++;
//   }, "5000");
//     return () => {
//       clearInterval(some);
//     };
// }
  // }, []);

    return(
        <Fragment>
            <h2 className="about-products-title"> Our Services</h2>
            <div className="about-products-title-line"></div>
            <div className="about-products_container">
            <AboutProducts title="Cool Designs" i={MdDesignServices} src={serviceImage1}/>
            <AboutProducts title="High quality" i={BsCartCheck} src={serviceImage2}/>
            <AboutProducts title="Resenable prices" i={BsCurrencyDollar} src={serviceImage3}/>
            <AboutProducts title="powerful products" i={ImPower} src={serviceImage4}/> 
            {/* <AboutProducts title="High quality" i="fa-solid fa-dollar-sign" src="../../images/About/headphone3.webp"/> */}
        
            </div>
            {/* <div className="intro">
                <div className="line"></div>
                <h4>ABOUT US</h4>
                <h1>OUR PLANS</h1>
            // </div> */}
                <h1 className="story-goal-section-title">Story && Goal</h1>

            <div className="info">
            <div className="info_story">
                <h2>Our Story</h2>
                <span>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</span>
                <span>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</span>
                <button>Learn More</button>
            </div>
            <div className="info_image"><img  muted src={storyGoalImage}/></div>
            <div className="info_goal">
                <h2>Our Goal</h2>
                <span>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</span>
                <ul>
                
                    <li><BsCheckLg/>Eos kasd eos dolor</li>
                    <li><BsCheckLg/>Eos kasd eos dolor</li>
                    <li><BsCheckLg/>Eos kasd eos dolor</li>
                    {/* <li><i className="fa fa-check"></i>Eos kasd eos dolor</li> */}
                    {/* <li><i className="fa fa-check"></i>Eos kasd eos dolor</li>
                    <li><i className="fa fa-check"></i>Eos kasd eos dolor</li> */}
                    <button>Learn More</button>
                </ul>
            </div>
        </div>


        <div className="team">
            <h2>Our Team && We Are Hiring</h2>
            <div className="team_container">
            <div className="team_member">
              <div>  <img src={teamImage1}/></div>
                <span>Trevor</span>
                <span>Manegar</span>
                <span>
                    {/* <i className="fa-brands fa-twitter"></i> */}
                <AiOutlineTwitter/>
                <BiLogoFacebook/>
                <BiLogoLinkedin/>
                    {/* <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-linkedin-in"></i> */}
                </span>
            </div>

            <div className="team_member">
                <div>  <img src={teamImage2}/></div>
                  <span>Jackie</span>
                  <span>Frontend Developer</span>
                  <span>
                  <AiOutlineTwitter/>
                <BiLogoFacebook/>
                <BiLogoLinkedin/>
                    {/* <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-facebook-f"></i>
                      <i className="fa-brands fa-linkedin-in"></i> */}
                  </span>
              </div>

            <div className="team_member">
                <div>  <img src={teamImage3}/></div>
                  <span>Natalie</span>
                  <span>UI/UX Designer</span>
                  <span>
                  <AiOutlineTwitter/>
                <BiLogoFacebook/>
                <BiLogoLinkedin/>
                  </span>
              </div>

            <div className="team_member">
                <div>  <img src={teamImage4}/></div>
                  <span>John</span>
                  <span>Backend Developer</span>
                  <span>
                  <AiOutlineTwitter/>
                <BiLogoFacebook/>
                <BiLogoLinkedin/>
                  </span>
              </div>

        </div>
    </div>


    <div>
      

    <div className="clients">
    <h2>Clients Say About Our Asus store</h2>
    {client === "firstClient" ?  <Client name="Andrews" src={clientImage1} job="Journalist" comment={comment}/> : "" }
    {client === "secondClient" ?  <Client name="Peter" src={clientImage2} job="Doctor" comment={comment}/> : "" }
    {client === "thirdClient" ?  <Client name="Luna" src={clientImage3} job="Lawyer" comment={comment}/> : "" }
    <div className="clients_buttons">

    
    {/* <div className={`"clients_buttons" ${client === "firstClient" ? "hover-button1" : ""}
     ${client === "secondClient" ? "hover-button2" : ""}
     ${client === "thirdClient" ? "hover-button3" : ""}`}
    > */}
                <span>
                    <span onClick={(event => { changeClient(event,"firstClient") })}><span className={`${client === "firstClient" ? "hover-button1" : ""}`}></span></span>
                    <span onClick={(event => { changeClient(event,"secondClient") })}><span className={`${client === "secondClient" ? "hover-button2" : ""}`}></span></span>
                    <span onClick={(event => { changeClient(event,"thirdClient") })}><span className={`${client === "thirdClient" ? "hover-button3" : ""}`}></span></span>
                </span>
            </div>
    </div>
    
    </div>
        <div className="footer">
            <h1>Asus Store</h1>
            <span className="footer_social">
                {/* <i className="fa-brands fa-twitter"></i> */}
                <BiLogoFacebook/>
                <FiInstagram/>
                <AiOutlineTwitter/>
                <BiLogoLinkedin/>
                {/* <i className="fa-brands fa-facebook-f"></i> */}
                {/* <BiLogoFacebook/> */}
                {/* <i className="fa-brands fa-linkedin-in"></i> */}
                {/* <FaLinkedinIn/> */}
                {/* <i className="fa-brands fa-linkedin-in"></i>  */}
            </span>
            <div className="footer_details">
                <div className="footer_details_intouch"><h2>Get In Touch</h2><span>50 Street, New York, USA</span><div>+012 345 67890</div></div>
                 <div className="line"></div> 
                <div className="footer_details_hours"><h2>Opening Hours</h2><span>Sun - sat, 9AM - 5PM</span><div>Sunday: Closed</div></div>
            </div>
            
            <div className="footer_rights">C All Rights Reserved Designed by <span className="Mohammed"> Mohammad Alzeer</span></div>
        </div>
        </Fragment>
    );
}

export default About;