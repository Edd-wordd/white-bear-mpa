import React from "react";


export default function Navigation() {
   return <div
                  className="btn-group d-flex mb-5"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a
                     href="create-answer.html"
                     className="btn btn-secondary btn-navigation"
                  >
                     Create new
                  </a>
                  <a
                     href="review-answer.html"
                     className="btn btn-secondary tab-separator btn-navigation"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards.html"
                     className="btn btn-secondary tab-separator btn-navigation"
                  >
                     All cards
                  </a>
               </div>
       
   
}