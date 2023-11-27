import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ViewTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((err) => console.log(err));

  };
  return (
    <div className="table-responsive bg-dark text-white">
      <h1>View Your Tasks</h1>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Task</th>
            <th scope="col" style={{ width: "1%" }}></th>
          </tr>
        </thead>
        <tbody>
          {tasks ? (
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.personName}</td>
                <td>{task.task}</td>
                <td className="x-button" onClick={() => deleteTask(task._id)}>
                  X
                </td>
              </tr>
            ))
          ) : (
            <tr>No Tasks Found</tr>
          )}
        </tbody>
      </table>
      <Link to="/add">
        <button className="btn btn-dark text-white">Add a new task</button>
      </Link>
    </div>
  );
}
