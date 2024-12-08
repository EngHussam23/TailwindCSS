type FlashCardProps = {
  name: string;
  description: string;
  className: string;
};

const FlashCards = ({
  name = "name",
  description = "description",
  className = "Default",
}: FlashCardProps) => {
  return (
    <div className={`FlashCard ${className}`}>
      <p>{name}</p>
    </div>
  );
};

export default FlashCards;
