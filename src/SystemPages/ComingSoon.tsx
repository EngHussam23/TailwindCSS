import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-top gap-6 w-screen h-screen py-8">
      <img src="src\assets\ComingSoon.gif" alt="404" className="w-1/2" />
      <p className="text-6xl font-medium -text--Primary-400">Comming Soon</p>
      <Link
        to="/"
        className="py-5 px-36 -bg--Primary-400 -text--Primary-50 rounded"
      >
        Go back
      </Link>
    </div>
  );
}
