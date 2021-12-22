import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function Login() {
  let [email, setEmail] = useState("");
  function onChangeHandler(event) {
    setEmail(event.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log("log in...");
    supabase.auth.signIn({ email: email }).then(function () {
      console.log("you are logged in");
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="email" value={email} onChange={onChangeHandler} />
      <button>Login</button>
    </form>
  );
}

export default Login;
