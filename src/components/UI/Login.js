import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class Login extends React.Component {
   constructor(props) {
      super(props);
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
   async setEmailState() {
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

   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Password must be 9 characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndVerifyUser() {
      console.log("Validate me!");
      const emailInput = document.getElementById("Login-email").value;
      const passwordInput = document.getElementById("Login-password").value;

      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdOn: Date.now(),
         };
         console.log(user);
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
                  className={classnames({
                     "form-control": true,
                     "is-invalid": this.state.hasPasswordError,
                  })}
                  id="Login-password"
               />

               {this.state.hasPasswordError && (
                  <small className=" mb-3 text-danger">
                     {this.state.passwordError}
                  </small>
               )}

               <Link
                  to=""
                  id="loginPage"
                  className="btn btn-success float-right mt-4"
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
