import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  //   console.log("error", error);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>
        {error.status} - {error.statusText}
      </h2>
      <h3>{error.data}</h3>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
