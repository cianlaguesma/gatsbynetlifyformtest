import * as React from "react";

// styles

// markup
const IndexPage = () => {
  return (
    <main>
      <h1>hello</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <p>
          <label>
            Your Name: <input type="text" name="hehe" />
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
