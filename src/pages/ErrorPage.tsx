import { useRouteError } from "react-router-dom";
// import { Header } from "../Header";

export function ErrorPage() {
  function isError(error: any): error is { statusText: string } {
    return "statusText" in error;
  }
  const error = useRouteError();
  return (
    <>
      {/* <Header /> */}
      <div className="text-center p-5 text-x1">
        <h1 className="text-x1 text-slate-900">
          Error Page. Back to home page.
        </h1>
        {isError(error) && (
          <p className="text-base text-slate-700">{error.statusText}</p>
        )}
      </div>
    </>
  );
}
