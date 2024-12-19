import { useState } from "react";
import AddTaskField from "./AddTaskField";
import ToDoTask from "./ToDoTask";

const ToDoSection = () => {
  const [tasks, setTasks] = useState([
    { TaskTitle: "Task 1", Important: true, Stroke: false },
    { TaskTitle: "Task 3", Important: true, Stroke: false },
    { TaskTitle: "Task 5", Important: true, Stroke: false },
    { TaskTitle: "Task 6", Important: true, Stroke: false },
    { TaskTitle: "Task 7", Important: true, Stroke: false },
    { TaskTitle: "Task 2", Important: false, Stroke: false },
    { TaskTitle: "Task 4", Important: false, Stroke: false },
  ]);

  const removeTask = (taskTitle: string) => {
    setTasks(tasks.filter((task) => task.TaskTitle !== taskTitle));
  };

  const AddTask = (taskTitle: string) => {
    if (taskTitle.trim()) {
      setTasks([
        ...tasks,
        { TaskTitle: taskTitle, Important: false, Stroke: false },
      ]);
    }
  };

  return (
    /*Page content container*/
    <section className="flex flex-col h-full w-screen items-start justify-between p-6 gap-6 -text--Primary-950 bg-[url('src/assets/Beach-Top-View.jpg')] bg-cover">
      {/*Tasks Section*/}
      <section className="flex flex-col w-full gap-3">
        <h1 className="font-semibold text-4xl p-2">My Day</h1>
        <div className="flex flex-col gap-4">
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
      {/* Add Task Input Field*/}
      <AddTaskField AddTask={AddTask} />
    </section>
  );
};

export default ToDoSection;

/*Completed Tasks Accordion*/
/*<section className="flex w-full items-center -text--Neutral-400 hover:-text--Primary-950 hover:cursor-pointer p-2 -bg--Neutral-200 rounded-lg">
  <AngleRight color="#778C99" size={24} />
  <h3 className="font-medium text-2xl">Completed Tasks</h3>
</section>*/
