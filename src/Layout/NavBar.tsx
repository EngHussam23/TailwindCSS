import Check from "../assets/Icons/Check";
import ClipboardList from "../assets/Icons/ClipboardList";
import Grid from "../assets/Icons/Grid";
import Star from "../assets/Icons/Star";
import Logo from "../Components/NavMenuComponents/Logo";
import MenuItem from "../Components/NavMenuComponents/MenuItem";
import SearchBar from "../Components/NavMenuComponents/SearchBar";

const TodoNav = () => {
  return (
    <nav className="flex flex-col justify-between h-screen p-6 w-max -bg--Primary-950 -text--Primary-50">
      <section className="flex flex-col gap-8 w-max">
        <Logo />
        <SearchBar />
        <section className="flex flex-col gap-3 w-full">
          {DefaultToDoListsMap.map((tab) => tab.item)}
          <hr className="-text--Neutral-800" />
          {CustomToDoListsMap.map((tab) => tab.item)}
        </section>
      </section>
      <MenuItem
        Icon={<Grid color="#6993C7" size={24} />}
        Name="Setting"
        NotificationsCount={2}
      />
    </nav>
  );
};

const DefaultToDoListsMap = [
  {
    id: 1,
    item: (
      <MenuItem
        Icon={<ClipboardList color="#6993C7" size={24} />}
        Name="Home"
        NotificationsCount={3}
      />
    ),
  },
  {
    id: 2,
    item: (
      <MenuItem
        Icon={<Star color="#6993C7" size={24} />}
        Name="Important"
        NotificationsCount={1}
      />
    ),
  },
  {
    id: 3,
    item: (
      <MenuItem
        Icon={<Check color="#6993C7" size={24} />}
        Name="Completed"
        NotificationsCount={12}
      />
    ),
  },
];

const CustomToDoListsMap = [
  {
    id: 1,
    item: (
      <MenuItem
        Icon={<ClipboardList color="#6993C7" size={24} />}
        Name="Custom List 1"
        NotificationsCount={2}
      />
    ),
  },
  {
    id: 2,
    item: (
      <MenuItem
        Icon={<ClipboardList color="#6993C7" size={24} />}
        Name="Custom List 2"
        NotificationsCount={1}
      />
    ),
  },
];

export default TodoNav;
