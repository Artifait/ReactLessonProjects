import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      404, вернитесь обратно <Link to="/">MAIN</Link>
    </div>
  );
}
