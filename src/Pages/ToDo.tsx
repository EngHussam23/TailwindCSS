import AngleRight from "../assets/Icons/AngleRight";
import Search from "../assets/Icons/Search";
import Star from "../assets/Icons/Star";

const ToDo = () => {
  return (
    <div className="flex items-center h-screen w-full">
      <nav className="flex flex-col items-start justify-between h-screen p-6 w-fit -bg--Primary-950 -text--Primary-50">
        <section className="flex flex-col gap-8">
          <img
            src="src\assets\Logo_Dark_-_Icon-removebg-preview.png"
            alt="Logo"
            className="w-14"
          />
          <section className="flex flex-col gap-3">
            <div className="flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg -bg--Primary-600">
              <p>Home</p>
            </div>
            <div className="flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg">
              <p>ToDo</p>
            </div>
            <div className="flex gap-2 hover:cursor-pointer px-2 py-1 hover:-bg--Primary-800 rounded-lg">
              <p>Important</p>
            </div>
            <div className="flex gap-2 hover:cursor-pointer px-2 py-1 hover:-bg--Primary-800 rounded-lg">
              <p>Completed</p>
            </div>
          </section>
        </section>
        <div className="flex gap-2 hover:cursor-pointer px-2 py-1 hover:-bg--Primary-800 rounded-lg">
          <p>Settings</p>
        </div>
      </nav>
      <div className="flex flex-col justify-start h-screen w-full -text--Primary-950">
        <section className="flex w-full justify-between p-6 -bg--Primary-600">
          <h1 className="font-semibold text-4xl -text--Primary-50">ToDo</h1>
          {/*Search Bar*/}
          <div className="flex items-center pr-2 gap-2 border-2 -border--Neutral-400 rounded-lg hover:-border--Neutral-100">
            <input
              type="search"
              title="search"
              placeholder="Search..."
              className="p-2 -bg--Primary-600 -placeholder--Neutral-400 rounded focus:outline-none focus:-text--Primary-950"
            />
            <Search size={24} color="#778C99" />
          </div>
        </section>
        <section className="flex flex-col h-full w-full items-start p-6 gap-6">
          <section className="flex flex-col w-full gap-3">
            <h3 className="font-medium text-2xl p-2">My Day</h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center justify-between p-4 hover:-bg--Neutral-100">
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    title="radio"
                    className="w-6 h-6 border rounded-md appearance-none"
                  />
                  Task 1
                </span>
                <Star color="#4F5F6B" size={24} />
              </label>
              <label className="flex items-center justify-between p-4 hover:-bg--Neutral-100">
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    title="radio"
                    className="w-6 h-6 border rounded-md appearance-none"
                  />
                  Task 1
                </span>
                <Star color="#C9D3D8" size={24} />
              </label>
              <label className="flex items-center justify-between p-4 hover:-bg--Neutral-100">
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    title="radio"
                    className="w-6 h-6 border rounded-md appearance-none"
                  />
                  Task 1
                </span>
                <Star color="#C9D3D8" size={24} />
              </label>
            </div>
          </section>
          <section className="flex w-full items-center -text--Neutral-400 hover:-text--Primary-950 hover:cursor-pointer p-2 -bg--Neutral-200 rounded-lg">
            <AngleRight color="#778C99" size={24} />
            <h3 className="font-medium text-2xl">Completed Tasks</h3>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ToDo;
