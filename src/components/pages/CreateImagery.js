import React from "react";
import saveIcon from "../../icons/save.svg";

import AppTemplate from "../UI/appTemplate";
import { Link } from "react-router-dom";

export default function CreateImagery() {
   return (
      <AppTemplate>
         <h4 className="my-4 text-center text-muted">Add memorable imagery</h4>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body secondCard">
                  <textarea
                     id="imagery-create"
                     className="w-100 d-sm-nope"
                     rows="11"
                     autoFocus={true}
                  ></textarea>
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
         <p className="float-right mb-5" id="countMe2">
            0/240
         </p>
         <div className="clearfix"></div>
         <Link to="/create-answer" className="btn btn-link" id="backToAnswer">
            Back to answer
         </Link>

         <Link
            to="/create-answer"
            id="save-imagery"
            className="btn btn-primary btn-lg float-right "
         >
            <img
               className="mb-2"
               src={saveIcon}
               width="20px;"
               style={{ marginTop: "5px", marginRight: "8px" }}
               alt=""
            />
            Save
         </Link>
      </AppTemplate>
   );
}
