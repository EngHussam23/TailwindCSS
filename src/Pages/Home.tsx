import { Outlet } from "react-router-dom";
import TodoNav from "../Layout/NavBar";

const TodoList = () => {
  return (
    <div className="flex items-center h-screen w-full">
      <TodoNav />
      <Outlet />
    </div>
  );
};

export default TodoList;
