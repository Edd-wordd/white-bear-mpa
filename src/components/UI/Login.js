import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 offset-xl-1 col-xl-5">
         <div className="card p-3 mb-5">
            <h2 className="card-title">Welcome back</h2>
            <p className="mb-5">Log in with your email address and password.</p>

            <form>
               <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email_2" />
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
               <Link
                  to="/create-answer"
                  id="loginPage"
                  className="btn btn-success float-right"
               >
                  Log in
               </Link>
            </form>
         </div>
      </div>
   );
}
