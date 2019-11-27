import React from "react";
import { useHistory, Link } from "react-router-dom";
import fakeAuth from "./fakeAuth";

export default function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <Link
      className="Auth"
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
    >
      <button>Log out</button>
    </Link>
  ) : (
    <button>Login </button>
  );
}
