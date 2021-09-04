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
    </main>
  );
};

export default IndexPage;
