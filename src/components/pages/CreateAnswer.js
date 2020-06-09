import React from "react";
import Header from "../UI/Header";
import Navigation from "../UI/Navigaiton";
import AppTemplate from "../UI/appTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <div className="my-2 text-center text-muted">
            <h4>Add an answer</h4>
         </div>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body secondCard">
                  <textarea
                     id="text1"
                     className="w-100"
                     rows="6"
                     autoFocus={true}
                  ></textarea>
               </div>
            </div>
         </div>
         <p className="float-right mb-5" id="countMe">
            0/240
         </p>
         <div className="clearfix"></div>

         <Link
            to="/create-imagery"
            className="btn btn-outline-primary btn-lg float-right"
            id="nextAnswer"
         >
            Next
         </Link>
      </AppTemplate>
   );
}
