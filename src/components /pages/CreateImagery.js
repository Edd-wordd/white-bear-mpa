import React from "react";
import whiteBearAppLogo from "../../img/logo-app.svg";
import saveIcon from "../../icons/save.svg";

export default function CreateImagery() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <img
                  src={whiteBearAppLogo}
                  alt="white bear logo"
                  width="32px;"
               />
               <h3 className="d-inline text-brand">White Bear</h3>

               <a
                  href="index.html"
                  className="float-right btn btn-link btn-navagation"
               >
                  Log Out
               </a>
               {/* <!-- end top logo and log out button --> */}
               {/* <!-- top nav buttons --> */}
               <div
                  className="btn-group d-flex"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a
                     href="create-answer.html"
                     className="btn btn-secondary btn-navigation tab-active"
                  >
                     Create new
                  </a>
                  <a
                     href="review-imagery.html"
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
               {/* <!-- end top nav buttons --> */}
               <h4 className="my-4 text-center text-muted">
                  Add memorable imagery
               </h4>
               {/* <!-- begin cards --> */}
               <div className="mb-2">
                  <div className="card bg-primary">
                     <div className="card-body secondCard">
                        <textarea
                           id="imagery-create"
                           className="w-100 d-sm-nope"
                           rows="11"
                           autofocus="autofocus"
                        ></textarea>
                        <textarea
                           className="w-100 d-nope d-sm-block"
                           rows="6"
                        ></textarea>
                     </div>
                  </div>
                  <div className="card bg-secondary">
                     <div className="card-body secondCard">
                        The European languages are members of the same family.
                        Their separate existence is a myth. For science, music,
                        sport, etc, Europe uses the same vocabulary. The
                        languages only differ in their grammar, their
                        pronunciation and their most common words.
                     </div>
                  </div>
               </div>
               {/* <!-- end cards --> */}
               {/* <!-- begin button buttons --> */}
               <p className="float-right mb-5" id="countMe2">
                  0/240
               </p>
               <div className="clearfix"></div>
               <a
                  href="landing.html"
                  className="btn btn-link"
                  id="backToAnswer"
               >
                  Back to answer
               </a>

               <a
                  id="save-imagery"
                  href="landing.html"
                  className="btn btn-primary btn-lg float-right disabled"
               >
                  <img
                     className="mb-2"
                     src={saveIcon}
                     width="20px;"
                     style={{ marginTop: "5px", marginRight: "8px" }}
                     alt=""
                  />
                  Save
               </a>
               {/* <!-- end bottom buttons --> */}
            </div>
         </div>
      </div>
   );
}
