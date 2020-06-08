import React from "react";
import whiteBearAppLogo from "../../img/logo-app.svg";


export default function Header() {
   return  <div>
   <img
                  src={whiteBearAppLogo}
                  alt="white bear logo"
                  width="32px;"
                  atl="white bear logo"
               />
               <h3 className="d-inline text-brand ">White Bear</h3>

               <a
                  href="index.html"
                  className="float-right btn btn-link btn-navagation"
               >
                  Log Out
               </a>
               </div>
       
   
}