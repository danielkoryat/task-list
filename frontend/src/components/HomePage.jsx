import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/add">
        <button className="btn">Add Task</button>
      </Link>
      <Link to="/view">
        <button className="btn">View Tasks</button>
      </Link>
    </>
  );
}
