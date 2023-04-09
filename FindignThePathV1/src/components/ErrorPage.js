import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const errObj= useRouteError()
    const {message} = errObj.error
    console.log(message)
    console.log(errObj)
  return (
    <div>
      <h1>Opps! This is not valid path !:</h1>
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorPage;
