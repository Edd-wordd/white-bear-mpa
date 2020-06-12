import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";

import AppTemplate from "../UI/appTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock data/memory-cards";

const memoryCard = memoryCards[2];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body secondCard">{memoryCard.imagery}</div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body secondCard">{memoryCard.answer}</div>
            </div>
         </div>
         <Link to="/edit" className="btn btn-link">
            Edit card
         </Link>
         <div className="float-right">
            <Link to="/review-empty" className="btn btn-outline-primary mr-1 ">
               Needs Work
            </Link>
            <Link to="/review-imagery" className="btn btn-primary">
               <img
                  className="mb-2"
                  src={thumbsUpIcon}
                  width="20px;"
                  style={{ marginRight: "7px" }}
                  alt=""
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}
