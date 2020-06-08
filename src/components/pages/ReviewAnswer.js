import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import Header from "../UI/Header"
import Navigation from "../UI/Navigaiton"


export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <Header/>
               <Navigation/>
               <div className="mb5"></div>

               
               <div className="mb-5">
                  <div className="card bg-primary">
                     <div className="card-body secondCard">
                        The quick, brown fox jumps over a lazy dog. DJs flock by
                        when MTV ax quiz prog. Junk MTV quiz graced by fox
                        whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad
                        nymph, for quick jigs vex! Fox nymphs grab quick-jived
                        waltz. Brick quiz whangs jumpy veldt fox.
                     </div>
                  </div>
                  <div className="card bg-secondary">
                     <div className="card-body secondCard">
                        The quick, brown fox jumps over a lazy dog. DJs flock by
                        when MTV ax quiz prog. Junk MTV quiz graced by fox
                        whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad
                        nymph, for quick jigs vex! Fox nymphs grab quick-jived
                        waltz. Brick quiz whangs jumpy veldt fox.
                     </div>
                  </div>
               </div>
               <button href="edit.html" className="btn btn-link">
                  Edit card
               </button>
               <div className="float-right">
                  <button
                     href="review-done.html"
                     className="btn btn-outline-primary mr-1"
                  >
                     Needs Work
                  </button>
                  <button href="review-done.html" className="btn btn-primary">
                     <img
                        className="mb-2"
                        src={thumbsUpIcon}
                        width="20px;"
                        style={{ marginRight: "7px" }}
                        alt=""
                     />
                     Got it
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
