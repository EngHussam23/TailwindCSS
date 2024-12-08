import Check from "../assets/Icons/Check";
import DoubleChevronLeft from "../assets/Icons/DoubleChevronLeft";
import SwatchBook from "../assets/Icons/SwatchBook";
import FlashCards from "./FlashCards";

type ToolsProps = {
  DefaultCount: number;
  SavedCount: number;
  LearningCount: number;
};

const FlashCardsSection = ({
  DefaultCount = 0,
  LearningCount = 0,
  SavedCount = 0,
}: ToolsProps) => {
  return (
    <div className="FlashCardsSection">
      <div className="ToolsSection">
        <div className="SavedCount">
          <p className="ShortcutKey">D</p>
          <div>
            <Check color="var(--green-500, #0E9F6E)" />
            <p>{SavedCount}</p>
          </div>
        </div>
        <div className="DefaultCount">
          <p className="ShortcutKey">S</p>
          <div>
            <SwatchBook color="var(--Neutral-950, #21262B)" />
            <p>{DefaultCount}</p>
          </div>
        </div>
        <div className="LearningCount">
          <p className="ShortcutKey">A</p>
          <div>
            <DoubleChevronLeft color="var(--yellow-500, #C27803)" />
            <p>{LearningCount}</p>
          </div>
        </div>
      </div>
      <div className="FlashCardsContainer">{Cards.map((elm) => elm.card)}</div>
    </div>
  );
};

export default FlashCardsSection;

const Cards = [
  // Angle Icons
  {
    card: (
      <FlashCards
        className="Default"
        name="ما هي أركان الإسلام"
        description="1. الشهادة
2. اقم الصلاة
3. ايتاء الزكاة
4. صوم رمضان.
5. حج البيت"
      />
    ),
  },
  {
    card: (
      <FlashCards
        className="Learning"
        name="ما هي أركان الإسلام"
        description="1. الشهادة
2. اقم الصلاة
3. ايتاء الزكاة
4. صوم رمضان.
5. حج البيت"
      />
    ),
  },
  {
    card: (
      <FlashCards
        className="Saved"
        name="ما هي أركان الإسلام"
        description="1. الشهادة
2. اقم الصلاة
3. ايتاء الزكاة
4. صوم رمضان.
5. حج البيت"
      />
    ),
  },
  {
    card: (
      <FlashCards
        className="Default"
        name="ما هي أركان الإسلام"
        description="1. الشهادة
2. اقم الصلاة
3. ايتاء الزكاة
4. صوم رمضان.
5. حج البيت"
      />
    ),
  },
  {
    card: (
      <FlashCards
        className="Default"
        name="ما هي أركان الإسلام"
        description="1. الشهادة
2. اقم الصلاة
3. ايتاء الزكاة
4. صوم رمضان.
5. حج البيت"
      />
    ),
  },
  {
    card: (
      <FlashCards
        className="Default"
        name="ما هي أركان الإسلام"
        description="1. الشهادة
2. اقم الصلاة
3. ايتاء الزكاة
4. صوم رمضان.
5. حج البيت"
      />
    ),
  },
  {
    card: (
      <FlashCards
        className="Default"
        name="ما هي أركان الإسلام"
        description="1. الشهادة
2. اقم الصلاة
3. ايتاء الزكاة
4. صوم رمضان.
5. حج البيت"
      />
    ),
  },
  {
    card: (
      <FlashCards
        className="Default"
        name="ما هي أركان الإسلام"
        description="1. الشهادة
2. اقم الصلاة
3. ايتاء الزكاة
4. صوم رمضان.
5. حج البيت"
      />
    ),
  },
];
