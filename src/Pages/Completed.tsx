import ToDoTask from "../Components/ToDoListComponents/ToDoTask";

const Completed = () => {
  return (
    /*Page content container*/
    <section className="flex flex-col h-full w-screen items-start justify-between p-6 gap-6 -text--Primary-950 bg-[url('src/assets/Mountain_Horizon.jpg')] bg-cover">
      {/*Tasks Section*/}
      <section className="flex flex-col w-full gap-3 overflow-hidden">
        <h1 className="font-semibold text-4xl p-2">Completed</h1>
        <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden">
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={true} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={true} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={true} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
          <ToDoTask TaskTitle="Task 1" Important={false} Stroke={true} />
        </div>
      </section>
    </section>
  );
};

export default Completed;
