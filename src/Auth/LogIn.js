import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import fakeAuth from "../Components/Hoc/fakeAuth";
export default function LogIn() {
  const loginData = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "0000",
      password: "0000"
    }
  ];

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = e => {
    e.preventDefault();
    loginData.map(item => {
      if (
        document.querySelector(".loginInput").value === item.username &&
        document.querySelector(".passwordInput").value === item.password
      ) {
        fakeAuth.authenticated(() => {
          history.replace(from);
        });
      }
    });
  };

  return (
    <div>
      <div className="logWrap">
        <div>
          <form onSubmit={login}>
            <h3>Log in</h3>
            <input
              type="text"
              name="login"
              className="loginInput"
              placeholder="Login"
            />

            <input
              type="password"
              name="password"
              className="passwordInput"
              placeholder="Password"
            />
            <input type="submit" className="button" name="" value="Log In" />
            <input type="reset" value="Recover" className="gof" />
          </form>
        </div>
      </div>
    </div>
  );
}
