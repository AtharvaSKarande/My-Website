import "../css/Error.css";

const Error = () => {
  return (
    <div>
      <p className="error__err404">
        Error <b> 404 !</b>
      </p>
      <p className="error__page_not_found">
        <b>Page Not Found</b>
      </p>
      <p className="error__page_not_found__desc">
        Sorry, but we couldn't find the page you are looking for. Either the
        page doesn't exist or is temporarily unavailable.
      </p>
      <button
        className="btn btn-outline-secondary btn-lg"
        onClick={(e) => (window.location.href = "/")}
      >
        Return To Homepage
      </button>
    </div>
  );
};

export default Error;
