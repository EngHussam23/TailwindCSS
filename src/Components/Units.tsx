import OpenBook from "../assets/Icons/OpenBook";

type UnitProps = {
  Name: string;
  Lessons: number;
  className?: string;
};

const Units = ({ Name, Lessons, className = "Unit" }: UnitProps) => {
  return (
    <div className={className}>
      <p>{Name}</p>
      <div className="UnitLessons">
        <OpenBook />
        <p>{Lessons} درس</p>
      </div>
    </div>
  );
};

export default Units;
