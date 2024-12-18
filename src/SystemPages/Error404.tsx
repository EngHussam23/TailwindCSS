import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="Error404 flex flex-col items-center justify-top gap-6 w-screen h-screen py-8">
      <img
        src="src\assets\404 error lost in space.gif"
        alt="404"
        className="w-1/2"
      />
      <Link
        to="/"
        className="py-5 px-36 -bg--Primary-400 -text--Primary-50 rounded"
      >
        Go back
      </Link>
    </div>
  );
}
