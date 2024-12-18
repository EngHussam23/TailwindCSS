import Check from "../assets/Icons/Check";
import ClipboardList from "../assets/Icons/ClipboardList";
import Grid from "../assets/Icons/Grid";
import Search from "../assets/Icons/Search";
import Star from "../assets/Icons/Star";

const TodoNav = () => {
  return (
    <nav className="flex flex-col justify-between h-screen p-6 w-max -bg--Primary-950 -text--Primary-50">
      <section className="flex flex-col gap-8">
        {/* Logo */}
        <img src="src\assets\Checklist-Logo.svg" alt="Logo" className="w-24" />
        {/* <svg clipPath="/src/assets/Checklist-Logo.svg" /> */}
        {/*Search Bar*/}
        <div className="flex items-center pr-2 gap-2 border overflow-hidden -border--Neutral-600 rounded-lg hover:-border--Neutral-100">
          <input
            type="search"
            title="search"
            placeholder="Search..."
            className="p-2 -bg--Primary-950 -placeholder--Neutral-600 rounded focus:outline-none focus:-text--Primary-50 text-sm"
          />
          <Search size={20} color="#4F5F6B" />
        </div>
        {/* Nav items / Links */}
        <section className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg -bg--Primary-600 items-center justify-between">
            <div className="flex gap-2 items-center">
              <ClipboardList color="#6993C7" size={20} />
              <p>Home</p>
            </div>
            <p className="py-1 px-2 rounded-md -bg--Primary-700">3</p>
          </div>
          <div className="flex gap-2 hover:cursor-pointer px-2 py-1 items-center hover:-bg--Primary-800 rounded-lg justify-between">
            <div className="flex gap-2 items-center">
              <Star color="#6993C7" size={20} />
              <p>Important</p>
            </div>
            <p className="py-1 px-2 rounded-md -bg--Primary-700">1</p>
          </div>
          <div className="flex gap-2 hover:cursor-pointer px-2 py-1 hover:-bg--Primary-800 rounded-lg items-center">
            <Check color="#6993C7" size={20} />
            <p>Completed</p>
          </div>
          <hr className="-text--Neutral-800" />
          <div className="flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg items-center justify-between">
            <div className="flex gap-2 items-center">
              <ClipboardList color="#6993C7" size={20} />
              <p>Weekend To-Do</p>
            </div>
            <p className="py-1 px-2 rounded-md -bg--Primary-700">2</p>
          </div>
          <div className="flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg items-center justify-between">
            <div className="flex gap-2 items-center">
              <ClipboardList color="#6993C7" size={20} />
              <p>Work To-Do</p>
            </div>
            <p className="py-1 px-2 rounded-md -bg--Primary-700">24</p>
          </div>
        </section>
      </section>
      <div className="flex gap-2 hover:cursor-pointer px-2 py-1 items-center hover:-bg--Primary-800 rounded-lg w-full">
        <Grid color="#6993C7" size={24} />
        <p>Settings</p>
      </div>
    </nav>
  );
};

export default TodoNav;
