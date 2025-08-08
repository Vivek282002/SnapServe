import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center my-5">
      <h1>404 - Page Not Found</h1>
      <p className="lead">Looks like you're lost...</p>
      <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
    </div>
  );
}
