type TabProps = {
  tabName?: string;
  onClick?: () => void;
  active?: boolean;
};

const Tab = ({ tabName = "Tab", onClick, active = false }: TabProps) => {
  return (
    <div
      onClick={onClick}
      className={
        active
          ? "Tab flex items-center p-4 text-base font-medium rounded-md -text--Neutral-800 -bg--Neutral-100"
          : "Tab flex items-center p-4 text-base font-medium rounded-md -text--Neutral-800"
      }
    >
      {tabName}
    </div>
  );
};

export default Tab;
