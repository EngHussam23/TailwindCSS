import AngleRight from "../../assets/Icons/AngleRight";
import Search from "../../assets/Icons/Search";
import Star from "../../assets/Icons/Star";

const ToDoSection = () => {
  return (
    /*Page content container*/
    <div className="flex flex-col justify-start p-6 h-screen w-full -text--Primary-950">
      <section className="flex w-full justify-end">
        {/*Search Bar*/}
        <div className="flex gap-2 p-2 border-2 -border--Neutral-100 rounded-lg">
          <input
            type="search"
            title="search"
            placeholder="Search..."
            className="-bg--Neutral-50 -placeholder--Neutral-200 rounded focus:outline-none focus:-text--Primary-950"
          />
          <Search size={24} color="#C9D3D8" />
        </div>
      </section>
      <section className="flex flex-col h-full w-full items-start gap-6">
        <h1 className="font-semibold text-4xl">My ToDo</h1>
        <section className="flex flex-col w-full gap-3">
          <h3 className="font-medium text-2xl p-2">My Day</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 hover:-bg--Neutral-100">
              <p>Task 1</p>
              <Star color="#4F5F6B" size={24} />
            </div>
            <div className="flex items-center justify-between p-4 hover:-bg--Neutral-100">
              <p>Task 1</p>
              <Star color="#C9D3D8" size={24} />
            </div>
            <div className="flex items-center justify-between p-4 hover:-bg--Neutral-100">
              <p>Task 1</p>
              <Star color="#C9D3D8" size={24} />
            </div>
          </div>
        </section>
        <section className="flex w-full items-center -text--Neutral-400 hover:-text--Primary-950 hover:cursor-pointer p-2 -bg--Neutral-200 rounded-lg">
          <AngleRight color="#778C99" size={24} />
          <h3 className="font-medium text-2xl">Completed Tasks</h3>
        </section>
      </section>
    </div>
  );
};

export default ToDoSection;
