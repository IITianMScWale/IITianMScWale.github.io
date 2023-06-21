import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    useEffect(() => {
        const id = setTimeout(() => window.location.href = '/', 10000);
        return () => clearTimeout(id);
    }, []);

    return (
        <div id="error-page" style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'red' }}>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p style={{ color: 'red' }}>
                <i>{error.statusText || error.message}</i>
            </p>
            <p><a href="/">Click here</a> to go to home page or you will be automatically redirected to home page in 10 seconds.</p>
        </div>
    );
}