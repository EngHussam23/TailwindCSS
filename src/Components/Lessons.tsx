type LessonProps = {
  name: string;
  className?: string;
};

const Lessons = ({ name /*className = "Lesson flex"*/ }: LessonProps) => {
  return (
    <div className="flex p-3 flex-col items-start w-235">
      <p>{name}</p>
    </div>
  );
};

export default Lessons;
