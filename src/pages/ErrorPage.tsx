import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops...</h1>
      <p>{isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}</p>
    </div>
  );
}
