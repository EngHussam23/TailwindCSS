import { useState } from "react";

import Star from "../../assets/Icons/Star";

type TaskProps = {
  TaskTitle: string;
  Important: boolean;
  Stroke: boolean;
  RemoveTask: () => void;
};

const ToDoTask = ({ TaskTitle, Important, Stroke, RemoveTask }: TaskProps) => {
  let setImportant;
  let setStroke;
  [Important, setImportant] = useState(Important);
  [Stroke, setStroke] = useState(Stroke);
  return (
    <div
      className={`flex items-center justify-between p-4 -text--Primary-50 ${Important ? "-bg--Neutral-950" : "-bg--Neutral-500"} bg-opacity-75 hover:-bg--Primary-900 hover:-text--Primary-50 rounded-md transition-all relative ToDoTask`}
    >
      <div
        className="flex items-center justify-center absolute -bg--Primary-900 px-3 py-1 rounded-t-lg left-1/3 right-1/3 bottom-full cursor-pointer RemoveTask"
        onClick={RemoveTask}
      >
        Remove
      </div>
      <span
        className={`flex items-center gap-3 ${Stroke ? "line-through" : ""}`}
      >
        <input
          type="checkbox"
          title="Checkbox"
          id={`${TaskTitle}Checkbox`}
          className="peer w-6 h-6 rounded-md -accent--Primary-950"
          checked={Stroke}
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
