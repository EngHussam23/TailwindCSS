import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-3xl font-bold -text--Primary-300"
    >
      <img src="src/assets/Todo2.0Dark.png" alt="Logo" className="w-24" />
      <p>My ToDo</p>
    </Link>
  );
};

export default Logo;
/*

<div className="flex items-center text-3xl font-bold -text--Primary-300">
<img src="src/assets/Todo2.0Dark.png" alt="Logo" className="w-24" />
<p>My ToDo</p>
</div>

*/
