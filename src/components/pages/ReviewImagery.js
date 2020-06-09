import React from "react";
import Header from "../UI/Header";
import Navigation from "../UI/Navigaiton";
import AppTemplate from "../UI/appTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body secondCard">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid sapiente error cumque nam. Cum, aperiam. Velit impedit
                  quos blanditiis minus ducimus, exercitationem id eius,
                  repellat natus delectus cumque unde corrupti?
               </div>
            </div>
         </div>
         <Link to="/review-answer" className="btn btn-link">
            Previous card
         </Link>
         <div className="float-right">
            <Link
               to="/review-answer"
               className="btn btn-outline-primary btn-lg"
            >
               Show answer
            </Link>
         </div>
      </AppTemplate>
   );
}
