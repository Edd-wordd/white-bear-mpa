import React from "react";
import AppTemplate from "../UI/appTemplate";
import MemoryCard from "../UI/MemoryCard";
import memoryCards from "../../mock data/memory-cards";
import { orderBy } from "lodash";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      console.log("edward is here");
      this.state = {
         searchInput: "",
         displayedCards: memoryCards,
         cardsOrderedBy: ["asec", "desc"],
         cardsDisplayed: orderBy([...memoryCards], "asec", "desc"),
      };
   }

   filteredCardUserInput() {
      const userInput = document.getElementById("searchId").value;
      console.log(userInput);

      const filteredCardsSearch = memoryCards.filter((card) => {});
   }

   render() {
      return (
         <AppTemplate>
            <div className="row mb-3">
               <div className="col-8">
                  <input
                     className="form-control form-control-sm"
                     type="text"
                     placeholder="Search for a word"
                     aria-label="Search"
                     id="searchId"
                  />
               </div>
               <div className="col-4">
                  <button
                     className="btn btn-secondary btn-sm btn-block"
                     id="searchBtn"
                     onClick={() => {
                        this.getUserInput();
                     }}
                  >
                     Search
                  </button>
               </div>
            </div>
            <div className="row">
               <div className="col-6">
                  <p>Sort cards by</p>
               </div>

               <div className="col-6">
                  <select className="custom-select mb-5 border">
                     <option defaultValue>Most recent</option>
                     <option value="1">Oldest</option>
                  </select>
               </div>
            </div>

            {memoryCards.map((memorycard) => {
               return (
                  <MemoryCard
                     answer={memorycard.answer}
                     imagery={memorycard.imagery}
                     key={memorycard.id}
                  />
               );
            })}
         </AppTemplate>
      );
   }
}
