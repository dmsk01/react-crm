import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../../components/Header/Header";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <b>{error.statusText || error.message}</b>
      </p>
    </div>
  );
}

export default ErrorPage;
