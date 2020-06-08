import React from "react";
import Header from "../UI/Header";
import Navigation from "../UI/Navigaiton";
import AppTemplate from "../UI/appTemplate";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="my-4 text-center text-muted">Edit card</h4>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body secondCard">
                  <textarea className="w-100 d-sm-nope" rows="11">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Nemo fugit quo sit minima totam dicta aspernatur inventore
                     quibusdam quidem ut. Quibusdam quo natus neque eaque velit
                     iure tenetur voluptate provident?
                  </textarea>
                  <textarea
                     className="w-100 d-nope d-sm-block"
                     rows="6"
                  ></textarea>
               </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body secondCard">
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,
                  Europe uses the same vocabulary. The languages only differ in
                  their grammar, their pronunciation and their most common
                  words.
               </div>
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
               attempt: <br />
               Consecutives:
               <br />
            </p>

            <p className="col-5">
               May 7, 2020 <br />
               May 7, 2020
               <br />
               May 7, 2020
               <br />
               10
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
               to="/index.html"
               id="delete-card"
               className="btn btn-outline-danger btn-lg d-none"
            >
               Delete this card
            </Link>
         </div>
      </AppTemplate>
   );
}
