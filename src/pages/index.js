import * as React from "react";

// styles

// markup
const IndexPage = () => {
  return (
    <main>
      <h1>hello</h1>
      <form name="test" method="POST" data-netlify="true">
        <p>
          <span>
            Your Name: <input type="text" name="name" />
          </span>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </main>
  );
};

export default IndexPage;
