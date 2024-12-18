import { useState } from "react";
import Star from "../../assets/Icons/Star";

type TaskProps = {
  TaskTitle: string;
};

const ToDoTask = ({ TaskTitle }: TaskProps) => {
  const [Important, setImportant] = useState(false);
  return (
    <label className="flex items-center justify-between p-4 -text--Primary-50 -bg--Neutral-600 bg-opacity-75 hover:-bg--Primary-900 hover:-text--Primary-50 rounded-md">
      <span className="flex items-center gap-3">
        <input
          type="radio"
          title="radio"
          className="w-6 h-6 border rounded-md appearance-none"
        />
        {TaskTitle}
      </span>
      <Star
        color={Important === true ? "#FACA15" : "#A4B4BC"}
        size={24}
        className="hover:cursor-pointer"
        onClick={
          Important === true
            ? () => setImportant(false)
            : () => setImportant(true)
        }
      />
    </label>
  );
};

export default ToDoTask;

/*

<label className="flex items-center justify-between p-4 -text--Primary-50 -bg--Neutral-600 bg-opacity-75 hover:-bg--Primary-900 hover:-text--Primary-50 rounded-md">
            <span className="flex items-center gap-3">
              <input
                type="radio"
                title="radio"
                className="w-6 h-6 border rounded-md appearance-none"
              />
              Build a ToDo list project
            </span>
            <Star color="#ffffff" size={24} className="" />
          </label>

*/
