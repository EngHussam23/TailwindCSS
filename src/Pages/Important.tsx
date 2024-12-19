import AddTaskField from "../Components/ToDoListComponents/AddTaskField";
import ToDoTask from "../Components/ToDoListComponents/ToDoTask";

const Important = () => {
  return (
    /*Page content container*/
    <section className="flex flex-col h-full w-screen items-start justify-between p-6 gap-6 -text--Primary-950 bg-[url('src/assets/Lake.jpg')] bg-cover">
      {/*Tasks Section*/}
      <section className="flex flex-col w-full gap-3">
        <h1 className="font-semibold text-4xl p-2">Important</h1>
        <div className="flex flex-col gap-4">
          <ToDoTask TaskTitle="Task 1" Important={true} Stroke={false} />
        </div>
      </section>
      {/* Add Task Input Field*/}
      <AddTaskField />
    </section>
  );
};

export default Important;
