import { useState } from "react";
import AddTaskField from "../Components/ToDoListComponents/AddTaskField";
import ToDoTask from "../Components/ToDoListComponents/ToDoTask";

const Important = () => {
  const [tasks, setTasks] = useState([
    { TaskTitle: "Task 1", Important: true, Stroke: false },
    { TaskTitle: "Task 3", Important: true, Stroke: false },
    { TaskTitle: "Task 5", Important: true, Stroke: false },
    { TaskTitle: "Task 6", Important: true, Stroke: false },
    { TaskTitle: "Task 7", Important: true, Stroke: false },
  ]);

  const RemoveTask = (taskTitle: string) => {
    setTasks(tasks.filter((task) => task.TaskTitle !== taskTitle));
  };

  const AddTask = (taskTitle: string) => {
    if (taskTitle.trim()) {
      setTasks([
        ...tasks,
        { TaskTitle: taskTitle, Important: true, Stroke: false },
      ]);
    }
  };

  return (
    /*Page content container*/
    <section className="flex flex-col h-full w-screen items-start justify-between p-6 gap-6 -text--Primary-950 bg-[url('src/assets/Lake.jpg')] bg-cover">
      {/*Tasks Section*/}
      <section className="flex flex-col w-full gap-3">
        <h1 className="font-semibold text-4xl p-2">Important</h1>
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <ToDoTask
              key={task.TaskTitle}
              TaskTitle={task.TaskTitle}
              Important={task.Important}
              Stroke={task.Stroke}
              RemoveTask={() => RemoveTask(task.TaskTitle)}
            />
          ))}
        </div>
      </section>
      {/* Add Task Input Field*/}
      <AddTaskField AddTask={AddTask} />
    </section>
  );
};

export default Important;
