import React from "react";
import {useEffect} from "react";
import {GrFacebookOption,GrInstagram,GrYoutube,GrLinkedinOption} from 'react-icons/gr'
import { FaBehance } from "react-icons/fa";
export default function Footer() {
    
 
  return (
    <>
    <div className="footer">
     <div className="address">
        47 Starwood Rd,

        <br/> Nepean, K2G 1Y9,
          
        <br/> ON, CA
     </div>
     <div className="email-phone">
       <div 
       >info@cangeosolutions.ca
       <br/>
       
       +1 514 226 9952
       </div>
       <div></div>
     </div>
     <div className="socials">
      <GrLinkedinOption />
      <FaBehance/>
      <GrFacebookOption/>
      <GrInstagram/>
      <GrYoutube/>
     </div>
    </div>
    <div className="copyright">© {new Date().getFullYear()} Copyright CANGEO Solutions Inc.</div>
    </>
  );
}
