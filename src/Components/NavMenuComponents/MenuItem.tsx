import { useState } from "react";

type MenuItemProps = {
  Icon: JSX.Element;
  Name: string;
  NotificationsCount?: number;
};

//React.MouseEventHandler<HTMLElement>

const MenuItem = ({ Icon, Name, NotificationsCount = 0 }: MenuItemProps) => {
  const [SelectedItem, setSelectedItem] = useState(false);

  return (
    <div
      className={
        SelectedItem === true
          ? "flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg -bg--Primary-600 items-center justify-between"
          : "flex gap-2 hover:cursor-pointer px-2 py-1 items-center hover:-bg--Primary-800 rounded-lg justify-between"
      }
      onClick={
        SelectedItem === true
          ? () => setSelectedItem(false)
          : () => setSelectedItem(true)
      }
    >
      <div className="flex gap-2 items-center">
        {Icon}
        <p>{Name}</p>
      </div>
      <p className="py-1 px-2 rounded-md -bg--Primary-700">
        {NotificationsCount}
      </p>
    </div>
  );
};

export default MenuItem;

/*
--------------------------------------------------------------------------------

Selected Items Styles:
className="flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg -bg--Primary-600 items-center justify-between"

--------------------------------------------------------------------------------

Default Item Styles:
className="flex gap-2 hover:cursor-pointer px-2 py-1 items-center hover:-bg--Primary-800 rounded-lg justify-between"

--------------------------------------------------------------------------------
*/
