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
          <div className="flex gap-2 hover:-text--Primary-400 hover:cursor-pointer">
            <p>Home</p>
          </div>
          <div className="flex gap-2 hover:-text--Primary-400 hover:cursor-pointer">
            <p>Important</p>
          </div>
          <div className="flex gap-2 hover:-text--Primary-400 hover:cursor-pointer">
            <p>Completed</p>
          </div>
        </section>
      </section>
      <div className="flex gap-2 hover:-text--Primary-400 hover:cursor-pointer">
        <p>Settings</p>
      </div>
    </nav>
  );
};

export default TodoNav;
