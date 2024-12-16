import ToDoSection from "../Components/ToDoListComponents/ToDoList";
import ToDoNav from "../Layout/NavBar";

const TodoList = () => {
  return (
    <div className="flex items-center h-screen w-full">
      <ToDoNav />
      <ToDoSection />
    </div>
  );
};

export default TodoList;
