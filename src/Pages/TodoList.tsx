import ToDoSection from "../Components/ToDo/ToDoSection";
import ToDoNav from "../Layout/TodoNav";

const TodoList = () => {
  return (
    <div className="flex items-center h-screen w-full">
      <ToDoNav />
      <ToDoSection />
    </div>
  );
};

export default TodoList;
