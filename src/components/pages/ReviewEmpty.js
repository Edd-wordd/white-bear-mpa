import React from "react";
import Header from "../UI/Header";
import Navigation from "../UI/Navigaiton";
import AppTemplate from "../UI/appTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="text-center text-muted my-4">Out of cards</h4>

         <Link to="/review-answer" className="btn btn-link">
            Previous card
         </Link>

         <div className="float-right">
            <Link to="/review-imagery" className="btn btn-outline-primary mr-4">
               Get more cards
            </Link>
         </div>
      </AppTemplate>
   );
}
