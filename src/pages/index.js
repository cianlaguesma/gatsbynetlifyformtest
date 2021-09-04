import * as React from "react";
import { useState } from "react";
// styles
const onSubmit = async (event, setSubmitText) => {
  event.preventDefault();
  setSubmitText("Submitting ...");
  const formElements = [...event.currentTarget.elements];
  const isValid =
    formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

  const validFormElements = isValid ? formElements : [];

  if (validFormElements.length < 1) {
    // or some other cheeky error message
    setSubmitText("It looks like you filled out too many fields!");
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
        setSubmitText("Successfully submitted!");
      })
      .catch((_) => {
        setSubmitText(
          "There was an error with your submission, please email me using the address above."
        );
      });
  }
};
// markup
const IndexPage = () => {
  const [submitText, setSubmitText] = useState(null);
  function test() {
    alert("clicked");
  }
  return (
    <main>
      <h1>hello</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={(e) => onSubmit(e, setSubmitText)}
        action="/"
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
      {submitText && <main>{submitText}</main>}
    </main>
  );
};

export default IndexPage;
