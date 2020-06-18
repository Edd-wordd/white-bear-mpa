import React from "react";
import memoryCards from "../../mock data/memory-cards";
import AppTemplate from "../UI/appTemplate";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";

const memoryCard = memoryCards[2];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.timeLog("edwrd is here");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
         isChecked: false,
      };
   }
   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length <= 0 ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length <= 0
      ) {
         return true;
      } else {
         return false;
      }
   }

   setImageryText(e) {
      console.log(e.target, e.target.value);
      this.setState({ imageryText: e.target.value });
   }
   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }
   isDeleteButtonShown() {
      this.setState({ isChecked: !this.state.isChecked });
   }
   render() {
      return (
         <AppTemplate>
            <h4 className="my-4 text-center text-muted">Edit card</h4>
            <div className="mb-2">
               <div className="card bg-primary">
                  <div className="card-body secondCard">
                     <textarea
                        className="w-100 d-sm-nope"
                        rows="11"
                        defaultValue={memoryCard.imagery}
                        onChange={(e) => this.setImageryText(e)}
                     ></textarea>
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body secondCard">
                     <textarea
                        className="w-100 d-sm-nope"
                        rows="5"
                        defaultValue={memoryCard.answer}
                        onChange={(e) => this.setAnswerText(e)}
                     ></textarea>
                  </div>
               </div>
            </div>
            <p className="float-right mb-5">
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.imageryText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  top: {this.state.imageryText.length}/{MAX_CARD_CHARS}
               </span>
               &nbsp;&nbsp;&nbsp;
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.answerText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  Bottom: {this.state.answerText.length}/{MAX_CARD_CHARS}
               </span>
            </p>
            <div className="clearfix"></div>
            <Link to="/all-cards" className="btn btn-link">
               Discard changes
            </Link>
            <Link
               to="/all-cards"
               id="save-imagery"
               className={classnames("btn btn-primary btn-lg float-right", {
                  disabled: this.checkHasInvalidCharCount(),
               })}
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
                     checked={this.state.isChecked}
                     onClick={() => {
                        this.isDeleteButtonShown();
                     }}
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="customCheck1"
                  >
                     Show delete button
                  </label>
               </div>
               {this.state.isChecked && (
                  <Link
                     to="/all-cards"
                     id="delete-card"
                     className="btn btn-outline-danger btn-lg "
                  >
                     Delete this card
                  </Link>
               )}
            </div>
         </AppTemplate>
      );
   }
}
