import * as React from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
// styles
const onSubmit = async (event) => {
  event.preventDefault();

  const formElements = [...event.currentTarget.elements];
  const isValid =
    formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

  const validFormElements = isValid ? formElements : [];

  if (validFormElements.length < 1) {
    // or some other cheeky error message
    toast.error("Invalid amount of inputs");
  } else {
    const filledOutElements = validFormElements
      .filter((elem) => !!elem.value)
      .map(
        (element) =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value)
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements,
    })
      .then(() => {
        toast.success("Successfully sent!");
      })
      .catch((_) => {
        toast.error("Failed to send!");
      });
  }
};
// markup
const IndexPage = () => {
  function test() {
    alert("clicked");
  }
  return (
    <main>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <h1>hello</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={(e) => onSubmit(e)}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>
            Your Name: <input type="text" name="Name" />
          </label>
          <label>
            Organization <input type="text" name="Organization" />
          </label>
          <label>
            Email: <input type="text" name="Email" />
          </label>
          <label>
            Phone Number: <input type="text" name="Phone Number" />
          </label>
          <label>
            Message <input type="text" name="Message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </main>
  );
};

export default IndexPage;
