import { useState } from "react";
import ToDoTask from "../Components/ToDoListComponents/ToDoTask";

const Completed = () => {
  const [tasks, setTasks] = useState([
    { TaskTitle: "Task 8", Important: true, Stroke: true },
    { TaskTitle: "Task 10", Important: true, Stroke: true },
    { TaskTitle: "Task 16", Important: true, Stroke: true },
    { TaskTitle: "Task 9", Important: false, Stroke: true },
    { TaskTitle: "Task 11", Important: false, Stroke: true },
    { TaskTitle: "Task 12", Important: false, Stroke: true },
    { TaskTitle: "Task 13", Important: false, Stroke: true },
    { TaskTitle: "Task 14", Important: false, Stroke: true },
    { TaskTitle: "Task 15", Important: false, Stroke: true },
    { TaskTitle: "Task 17", Important: false, Stroke: true },
    { TaskTitle: "Task 18", Important: false, Stroke: true },
    { TaskTitle: "Task 19", Important: false, Stroke: true },
  ]);

  const removeTask = (taskTitle: string) => {
    setTasks(tasks.filter((task) => task.TaskTitle !== taskTitle));
  };

  return (
    /*Page content container*/
    <section className="flex flex-col h-full w-screen items-start justify-between p-6 gap-6 -text--Primary-950 bg-[url('src/assets/Mountain_Horizon.jpg')] bg-cover">
      {/*Tasks Section*/}
      <section className="flex flex-col w-full gap-3 overflow-hidden">
        <h1 className="font-semibold text-4xl p-2">Completed</h1>
        <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden">
          {tasks.map((task) => (
            <ToDoTask
              key={task.TaskTitle}
              TaskTitle={task.TaskTitle}
              Important={task.Important}
              Stroke={task.Stroke}
              RemoveTask={() => removeTask(task.TaskTitle)}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Completed;
