import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class Login extends React.Component {
   constructor(props) {
      super(props);
      console.log("edward is here or is he not");
      this.state = { hasLoginBeenClicked: false, emailError: "" };
   }
   loginClicked() {
      this.setState({
         hasLoginBeenClicked: true,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      });
   }

   validateAndVerifyUser() {
      console.log("Validate me!");
      const emailInput = document.getElementById("Login-email").value;
      const lowerCasedEmailInput = emailInput.toLowerCase();
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailInput === "")
         this.setState({
            emailError: "Please enter email address.",
            hasEmailError: true,
         });
      else if (emailRegex.test(lowerCasedEmailInput) === false) {
         this.setState({
            emailError: "Please enter VALID email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }
   render() {
      return (
         <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-1 col-lg-4 offset-xl-1 col-xl-5">
            <div className="card p-3 mb-5">
               <h2 className="card-title">Welcome back</h2>
               <p className="mb-5">
                  Log in with your email address and password.
               </p>
               <label htmlFor="Login-email">Email address</label>
               <input
                  type="email"
                  className={classnames({
                     "form-control": true,
                     "is-invalid": this.state.hasEmailError,
                  })}
                  id="Login-email"
               />
               {this.state.hasEmailError && (
                  <small className=" mb-3 text-danger">
                     {this.state.emailError}
                  </small>
               )}

               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  className="form-control mb-5"
                  id="password_2"
               />
               <div className="invalid-feedback">
                  Please enter password. Must be 9 characters
               </div>

               <Link
                  to=""
                  id="loginPage"
                  className="btn btn-success float-right"
                  onClick={() => {
                     this.validateAndVerifyUser();
                  }}
               >
                  Log in
               </Link>
            </div>
         </div>
      );
   }
}
