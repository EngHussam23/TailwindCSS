import AddTaskField from "./AddTaskField";
import ToDoTask from "./ToDoTask";

const ToDoSection = () => {
  return (
    /*Page content container*/
    <section className="flex flex-col h-full w-screen items-start justify-between p-6 gap-6 -text--Primary-950 bg-[url('src/assets/Beach-Top-View.jpg')] bg-cover">
      {/*Tasks Section*/}
      <section className="flex flex-col w-full gap-3">
        <h1 className="font-semibold text-4xl p-2">My Day</h1>
        <div className="flex flex-col gap-4">
          <ToDoTask TaskTitle="Task 1" IsImportant={false} />
          <ToDoTask TaskTitle="Test 2" IsImportant={false} />
          <ToDoTask TaskTitle="Test 3" IsImportant={false} />
        </div>
      </section>
      {/* Add Task Input Field*/}
      <AddTaskField />
    </section>
  );
};

export default ToDoSection;

/*Completed Tasks Accordion*/
/*<section className="flex w-full items-center -text--Neutral-400 hover:-text--Primary-950 hover:cursor-pointer p-2 -bg--Neutral-200 rounded-lg">
  <AngleRight color="#778C99" size={24} />
  <h3 className="font-medium text-2xl">Completed Tasks</h3>
</section>*/
