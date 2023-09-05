// NotFoundPage.js
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link replace to="/">Go back to home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
