import { useRouteError } from "react-router-dom";



const ErrorJs = () =>{

    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>OOPs!Something went Wrong</h1>
            <h2>404 Error!</h2>
            <p>{err.status}   {err.statusText}</p>
        </div>
    )
}

export default ErrorJs;