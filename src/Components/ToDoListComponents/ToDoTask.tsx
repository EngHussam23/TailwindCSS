import { useState } from "react";

import Star from "../../assets/Icons/Star";

type TaskProps = {
  TaskTitle: string;
  Important: boolean;
  Stroke: boolean;
};

const ToDoTask = ({ TaskTitle, Important, Stroke }: TaskProps) => {
  let setImportant;
  let setStroke;
  [Important, setImportant] = useState(Important);
  [Stroke, setStroke] = useState(Stroke);
  return (
    <div
      className={
        Important === true
          ? "flex items-center justify-between p-4 -text--Primary-50 -bg--Neutral-950 bg-opacity-75 hover:-bg--Primary-900 hover:-text--Primary-50 rounded-md"
          : "flex items-center justify-between p-4 -text--Primary-50 -bg--Neutral-500 bg-opacity-75 hover:-bg--Primary-900 hover:-text--Primary-50 rounded-md"
      }
    >
      <span
        className={
          Stroke === true
            ? "flex items-center gap-3 line-through"
            : "flex items-center gap-3"
        }
      >
        <input
          type="radio"
          title="radio"
          className="w-6 h-6 border rounded-md appearance-none"
          onClick={() => setStroke(!Stroke)}
        />
        {TaskTitle}
      </span>
      <Star
        color={Important === true ? "#FACA15" : "#A4B4BC"}
        size={24}
        className="hover:cursor-pointer"
        onClick={() => setImportant(!Important)}
      />
    </div>
  );
};

export default ToDoTask;
