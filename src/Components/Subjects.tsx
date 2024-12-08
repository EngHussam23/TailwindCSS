import Angleleft from "../assets/Icons/AngleLeft";
import Book from "../assets/Icons/Book";
import OpenBook from "../assets/Icons/OpenBook";

type SubjectProps = {
  Name: string;
  Units: number;
  Lessons: number;
  className?: string;
};

const Subjects = ({ Name, Units, Lessons, className }: SubjectProps) => {
  return (
    <div className={className}>
      <p className="overflow-hidden -text--gray-700 text-right text-ellipsis text-lg font-medium leading-5">
        {Name}
      </p>
      <div className="flex items-center gap-3">
        <div>
          <Book color="var(--Neutral-400)" size={24} />
          <p>{Units} وحدة</p>
        </div>
        <Angleleft className="Breadcrumb" />
        <div>
          <OpenBook color="var(--Neutral-400)" size={24} />
          <p>{Lessons} درس</p>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
