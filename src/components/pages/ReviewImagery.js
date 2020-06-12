import React from "react";

import AppTemplate from "../UI/appTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock data/memory-cards";

const memoryCard = memoryCards[2];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body secondCard">{memoryCard.imagery}</div>
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
