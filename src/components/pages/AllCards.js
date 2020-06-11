import React from "react";
import AppTemplate from "../UI/appTemplate";
import MemoryCard from "../UI/MemoryCard";
import memoryCards from "../../mock data/memory-cards";

export default function AllCards() {
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
                  <option value="2">Hardest</option>
                  <option value="3">Easiest</option>
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
