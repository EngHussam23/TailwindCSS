import { useState } from "react";
import Angleleft from "../assets/Icons/AngleLeft";
import Tab from "./TabComp";
import FlashCardsSection from "./FlashCardsSection";
import Units from "./Units";
import Lessons from "./Lessons";
import Moon from "../assets/Icons/Moon";
import Subjects from "./Subjects";

const TabsBar = () => {
  const [activeTabId, setActiveTabId] = useState(4);

  const renderContent = () => {
    //This function returns the content of the active tab.
    const activeTabContent = TabsMap.find((tab) => tab.id === activeTabId); //This line finds the active tab's content.
    return activeTabContent ? activeTabContent.tab : null; // This line returns the active tab or return null.
  };

  const renderActiveTab = (id: number) => {
    //From here we show the active tab only along with the higher ones.
    setActiveTabId(id);
  };

  return (
    <div className="h-screen -text--Neutral-600 font-sans overflow-scroll">
      <div className="flex items-center justify-between py-2 px-5 border-b -border--Neutral-100 border-solid">
        <Moon color="var(--Neutral-400)" size={24} />
        <div className="flex items-center gap-1">
          {TabsMap.map((tab, index) =>
            activeTabId >= index ? (
              tab.name === "default" ? null : (
                <>
                  <Tab
                    tabName={tab.name}
                    active={activeTabId == index ? true : false}
                    onClick={() =>
                      activeTabId === tab.id
                        ? renderActiveTab(4)
                        : renderActiveTab(tab.id)
                    }
                  />
                  {tab.id < 3 && (
                    <Angleleft color="var(--Neutral-200)" size={16} />
                  )}
                </>
              )
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div className="py-4 px-0">{renderContent()}</div>
    </div>
  );
};

const TabsMap = [
  {
    tab: (
      <FlashCardsSection DefaultCount={12} LearningCount={4} SavedCount={8} />
    ),
    name: "default",
    id: 4,
  },
  {
    tab: (
      <div className="flex flex-col gap-8">
        <Subjects
          Name="اللغة العربية"
          Lessons={40}
          Units={10}
          className="Subject"
        />
        <Subjects
          Name="تاريخ الأردن"
          Lessons={40}
          Units={10}
          className="flex p-3 flex-col items-end gap-2 rounded-md -bg--white w-screen"
        />
        <Subjects
          Name="الدراسات الاسلامية"
          Lessons={40}
          Units={10}
          className="flex p-3 flex-col items-end gap-2 rounded-md -bg--white w-1/2"
        />
      </div>
    ),
    name: "اللغة العربية",
    id: 1,
  },
  {
    tab: (
      <div className="flex flex-col gap-8">
        <Units Lessons={8} Name="الوحدة الأولى: كذا كذا كذا" />
        <Units
          Lessons={11}
          Name="الوحدة الثانية: كذا كذا كذا"
          className="NotSelectedLesson"
        />
        <Units
          Lessons={12}
          Name="الوحدة الثالثة: كذا كذا كذا"
          className="NotSelectedLesson"
        />
        <Units
          Lessons={11}
          Name="الوحدة الرابعة: كذا كذا كذا"
          className="NotSelectedLesson"
        />
      </div>
    ),
    name: "الوحدة الأولى: كذا كذا كذا",
    id: 2,
  },
  {
    tab: (
      <div className="flex flex-col gap-8">
        <Lessons name="الدرس الأول: كذا كذا" />
        <Lessons name="الدرس الثاني: كذ كذا" className="NotSelectedLesson" />
        <Lessons name="الدرس الثالث: كذا كذا" className="NotSelectedLesson" />
        <Lessons name="الدرس الرابع: كذا كذا" className="NotSelectedLesson" />
      </div>
    ),
    name: "الدرس الأول: كذا كذا",
    id: 3,
  },
];

export default TabsBar;
