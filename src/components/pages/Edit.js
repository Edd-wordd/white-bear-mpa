import React from "react";
import memoryCards from "../../mock data/memory-cards";
import AppTemplate from "../UI/appTemplate";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
import toDisplayDate from "date-fns/format";
const memoryCard = memoryCards[2];

export default function Edit() {
   return (
      <AppTemplate>
         <h4 className="my-4 text-center text-muted">Edit card</h4>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body secondCard">
                  <textarea className="w-100 d-sm-nope" rows="11">
                     {memoryCard.imagery}
                  </textarea>
                  <textarea
                     className="w-100 d-nope d-sm-block"
                     rows="6"
                  ></textarea>
               </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body secondCard">{memoryCard.answer}</div>
            </div>
         </div>
         <p className="float-right mb-5">0/300</p>
         <div className="clearfix"></div>
         <Link to="/all-cards" className="btn btn-link">
            Discard changes
         </Link>

         <Link
            to="/all-cards"
            id="save-imagery"
            className="btn btn-primary btn-lg float-right"
         >
            <img
               className="mb-1"
               src={saveIcon}
               width="20px;"
               style={{ marginTop: "5px", marginRight: "8px" }}
               alt=""
            />
            Save
         </Link>
         <h4 className="text-center mt-5 text-muted">Card properties</h4>

         <div className="row mt-5">
            <p className="text-muted col-4 mb-5">
               Created: <br />
               Last attempt: <br />
               Next attempt: <br />
               Consecutives:
               <br />
            </p>

            <p className="col-5">
               {toDisplayDate(memoryCard.createdAt, "MMM. d, y")}
               <br />
               {toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, y")}
               <br />
               {toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}
               <br />
               {memoryCard.totalSuccessfulAttempts}
               <br />
            </p>

            <div className="custom-control custom-checkbox col-12 mb-2">
               <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
               />
               <label className="custom-control-label" htmlFor="customCheck1">
                  Show delete button
               </label>
            </div>

            <Link
               to="/all-cards"
               id="delete-card"
               className="btn btn-outline-danger btn-lg "
            >
               Delete this card
            </Link>
         </div>
      </AppTemplate>
   );
}
