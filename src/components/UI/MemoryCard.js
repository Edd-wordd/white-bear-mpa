import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../../icons/edit.svg";

export default function MemoryCard(props) {
   return (
      <div className="row">
         <div className="card bg-primary col-9 offset-1">
            <div className="card-body secondCard">{props.imagery}</div>
         </div>
         <Link to="/edit" className="btn btn-link col-2">
            <img src={editIcon} width="20px" alt="" />
            Edit
         </Link>

         <div className="card bg-secondary col-9 offset-1 mb-5">
            <div className="card-body secondCard">{props.answer}</div>
         </div>
      </div>
   );
}
