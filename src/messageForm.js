import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function MessageForm() {
  let [content, setContent] = useState("");

  function onInputChange(e) {
    setContent(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("send message to server", content);

    supabase
      .from("messages")
      .insert([{ content: content }])
      .then(function () {
        console.log("that worked");
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onInputChange} value={content} />
      <button>Send</button>
    </form>
  );
}

export default MessageForm;
