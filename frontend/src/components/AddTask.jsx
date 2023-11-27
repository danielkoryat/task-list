import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddTask() {
  const [displaySucsess, setDisplaySucsess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => reset())
      .then(() => setDisplaySucsess(true))
      .catch((err) => {
        console.log(err);
        setDisplaySucsess(false);
      });

    if (errors) {
      setDisplaySucsess(false);
    }
  };

  return (
    <>
      <div className="controled-form bg-dark text-white p-5">
        <h1>Add Task</h1>
        {displaySucsess && (
          <p className="text-sucsess">Task added successfully</p>
        )}
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="form-group">
            <label htmlFor="name">enter your name</label>
            <input
              className="form-control bg-dark text-white"
              type="text"
              name="name"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <span className="text-error">please anter your name</span>
            )}
            <br />
            <label htmlFor="task">enter your task</label>
            <input
              className="form-control bg-dark text-white"
              type="text"
              name="task"
              {...register("task", {
                required: true,
              })}
            />
            {errors.task && (
              <span className="text-error">please anter a task</span>
            )}
            <br />
            <button type="submit" className="btn btn-dark text-white">
              Add Task
            </button>
          </div>
        </form>
      <Link to="/view">
        <button className="btn btn-dark text-white">View Current Tasks</button>
      </Link>
      </div>
    </>
  );
}
