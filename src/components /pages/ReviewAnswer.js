import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import whiteBearAppLogo from "../../img/logo-app.svg";

export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               {/* <!-- top bear logo and log out button --> */}
               <img
                  src={whiteBearAppLogo}
                  alt="white bear logo"
                  width="32px;"
                  atl="white bear logo"
               />
               <h3 className="d-inline text-brand">White Bear</h3>

               <a
                  href="index.html"
                  className="float-right btn btn-link btn-navagation"
               >
                  Log Out
               </a>

               {/* <!-- end top bear logo and log out button --> */}
               {/* <!-- top nav buttons --> */}
               <div
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
                     className="btn btn-secondary tab-separator btn-navigation tab-active"
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
               {/* <!-- end top nav buttons --> */}
               {/* <!-- begin cards --> */}
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
               {/* <!-- end cards --> */}
               {/* <!-- botton of the page buttons --> */}
               <a href="edit.html" className="btn btn-link">
                  Edit card
               </a>
               <div className="float-right">
                  <a
                     href="review-done.html"
                     className="btn btn-outline-primary mr-1"
                  >
                     Needs Work
                  </a>
                  <a href="review-done.html" className="btn btn-primary">
                     <img
                        className="mb-2"
                        src={thumbsUpIcon}
                        width="20px;"
                        style={{ marginRight: "7px" }}
                        alt=""
                     />
                     Got it
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
