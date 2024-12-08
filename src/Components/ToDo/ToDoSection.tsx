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
        <section className="flex flex-col h-full w-full gap-3">
          <h3 className="font-medium text-2xl">My Day</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4">
              <p>Task 1</p>
              <Star color="#C9D3D8" />
            </div>
            <div className="flex items-center justify-between p-4">
              <p>Task 1</p>
              <Star color="#C9D3D8" />
            </div>
            <div className="flex items-center justify-between p-4">
              <p>Task 1</p>
              <Star color="#C9D3D8" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ToDoSection;
