import React from "react";

const ErrorPage = ({ msg, status }) => {
  return (
    <div>
      <h2>
        Oooopp!!, Something went wrong{" "}
        <span role="img" aria-label="sad face!">
          &#128543;
        </span>
      </h2>
      <p>Status: {status}</p>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorPage;
