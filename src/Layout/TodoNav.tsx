const TodoNav = () => {
  return (
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
          <a
            href="src/Pages/ToDo"
            target="_blank"
            className="flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg"
          >
            <p>ToDo</p>
          </a>
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
  );
};

export default TodoNav;
