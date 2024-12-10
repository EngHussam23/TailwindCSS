import DoubleChevronRight from "../../assets/Icons/DoubleChevronRight";
import Star from "../../assets/Icons/Star";

const ToDoSection = () => {
  return (
    /*Page content container*/
    <section className="flex flex-col h-full w-screen items-start justify-between p-6 gap-6 -text--Primary-950 bg-[url('src/assets/Beach-Top-View.jpg')] bg-cover">
      <section className="flex flex-col w-full gap-3">
        <h1 className="font-semibold text-4xl p-2">My Day</h1>
        <div className="flex flex-col gap-4">
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
          <label className="flex items-center justify-between p-4 -text--Primary-50 -bg--Neutral-600 bg-opacity-75 hover:-bg--Primary-900 hover:-text--Primary-50 rounded-md">
            <span className="flex items-center gap-3">
              <input
                type="radio"
                title="radio"
                className="w-6 h-6 border rounded-md appearance-none"
              />
              Get your feedback from Ala'a
            </span>
            <Star color="#A4B4BC" size={24} />
          </label>
          <label className="flex items-center justify-between p-4 -text--Primary-50 -bg--Neutral-600 bg-opacity-75 hover:-bg--Primary-900 hover:-text--Primary-50 rounded-md">
            <span className="flex items-center gap-3">
              <input
                type="radio"
                title="radio"
                className="w-6 h-6 border rounded-md appearance-none"
              />
              Iterate on the project based on the feedback you get
            </span>
            <Star color="#A4B4BC" size={24} />
          </label>
        </div>
      </section>
      <div className="flex items-center pr-2 gap-2 overflow-hidden -text--Primary-50 -bg--Neutral-600 bg-opacity-75 rounded-md hover:-bg--Primary-900 w-full">
        <input
          type="search"
          title="search"
          placeholder="Add a Task..."
          className="p-4 -bg--Primary-950 bg-opacity-0 -placeholder--Primary-50 rounded focus:outline-none focus:-text--Primary-50 hover:-placeholder--Primary-50 w-full"
        />
        <DoubleChevronRight size={24} color="#F4F6FB" />
      </div>
      {/*<section className="flex w-full items-center -text--Neutral-400 hover:-text--Primary-950 hover:cursor-pointer p-2 -bg--Neutral-200 rounded-lg">
        <AngleRight color="#778C99" size={24} />
        <h3 className="font-medium text-2xl">Completed Tasks</h3>
      </section>*/}
    </section>
  );
};

export default ToDoSection;
