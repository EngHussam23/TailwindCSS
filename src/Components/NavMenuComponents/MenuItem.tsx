import { NavLink } from "react-router-dom";

type MenuItemProps = {
  Icon: JSX.Element;
  Name: string;
  NotificationsCount?: number;
  to: string;
};

const MenuItem = ({
  Icon,
  Name,
  NotificationsCount = 0,
  to,
}: MenuItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive
          ? "flex gap-2 hover:cursor-pointer hover:-bg--Primary-700 px-2 py-1 rounded-lg -bg--Primary-600 items-center justify-between"
          : "flex gap-2 hover:cursor-pointer px-2 py-1 items-center hover:-bg--Primary-800 rounded-lg justify-between";
      }}
    >
      <div className="flex gap-2 items-center">
        {Icon}
        <p>{Name}</p>
      </div>
      <p
        className={
          NotificationsCount === 0
            ? ""
            : "py-1 px-2 rounded-md -bg--Primary-700"
        }
      >
        {NotificationsCount === 0 ? "" : NotificationsCount}
      </p>
    </NavLink>
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
