import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function Messages() {
  let [messages, setMessages] = useState([]);

  useEffect(function () {
    supabase
      .from("messages") // messages is the table name
      .select() // select all records
      .then(function (data) {
        setMessages(data.body);
      });

    console.log("the component was just rendered");
  }, []); // empty array means it will only run once - just after the component has initially rendered

  useEffect(
    function () {
      supabase
        .from("messages")
        .on("INSERT", function (payload) {
          // spread operator
          // pass in a new array with all of the current messages
          // as well as the new message at the end
          setMessages([...messages, payload.new]);
        })
        .subscribe();
    },
    [messages]
  ); // this is triggered every time messages has changed

  console.log(messages);
  let messagesMarkup = messages.map(function (msg) {
    console.log(msg);
    return (
      <div key={msg.id}>
        <p>{msg.content}</p>
      </div>
    );
  });

  return <div>{messagesMarkup}</div>;
}

export default Messages;
