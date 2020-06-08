import React from "react";
import { Link } from "react-router-dom";
import landingBear from "../../img/logo-landing.png";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="row">
                     <img
                        className="ml-3 mt-5 bearStar"
                        src={landingBear}
                        alt="white bear logo"
                     />

                     <h1 className="ml-3 mt-5" id="brandHeader">
                        White Bear
                     </h1>
                  </div>
                  <div className="row landCards">
                     <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-2 col-lg-4 offset-xl-1 col-xl-4">
                        <div className="card p-3 mb-5">
                           <h2 className="card-title">Nice to meet you</h2>
                           <p className="mb-5">
                              Sign up for White Bear. Free forever
                           </p>

                           <div className="" id="upBar">
                              <p className="mb-5 text-success">
                                 Let's get you signed up.
                              </p>

                              <form>
                                 <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       id="email_1"
                                    />
                                    <div className="invalid-feedback">
                                       Please enter email address
                                    </div>
                                    <div className="text-danger">
                                       <small className="unique-mess"></small>
                                    </div>
                                 </div>

                                 <div className="form-group">
                                    <label htmlFor="password">
                                       Create a password
                                    </label>
                                    <input
                                       type="password"
                                       className="form-control"
                                       id="password_1"
                                    />
                                    <div className="invalid-feedback">
                                       Please create password. Must be 9
                                       characters
                                    </div>
                                    <div className="text-danger">
                                       <small className="error-message"></small>
                                    </div>
                                    <div className="text-danger">
                                       <small className="beOriginal"></small>
                                    </div>
                                 </div>

                                 <button
                                    id="letsGoIndex"
                                    className="btn btn-success float-right btn-block btn-lg"
                                 >
                                    Let's go!
                                 </button>
                              </form>
                           </div>
                           <Link
                              to="/"
                              className="btn btn-success float-right w-100 car btn-lg"
                           >
                              Sign up
                           </Link>
                        </div>
                     </div>
                     <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 offset-xl-1 col-xl-5">
                        <div className="card p-3 mb-5">
                           <h2 className="card-title">Welcome back</h2>
                           <p className="mb-5">
                              Log in with your email address and password.
                           </p>

                           <form>
                              <div className="form-group">
                                 <label htmlFor="email">Email address</label>
                                 <input
                                    type="email"
                                    className="form-control"
                                    id="email_2"
                                 />
                                 <div className="invalid-feedback">
                                    Please enter email address
                                 </div>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="password">Password</label>
                                 <input
                                    type="password"
                                    className="form-control"
                                    id="password_2"
                                 />
                                 <div className="invalid-feedback">
                                    Please enter password. Must be 9 characters
                                 </div>
                              </div>
                              <a
                                 id="loginPage"
                                 href="create-answer.html"
                                 className="btn btn-success float-right"
                              >
                                 Log in
                              </a>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
