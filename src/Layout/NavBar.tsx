const NavBar = () => {
  return (
    <>
      <nav className="h-screen w-fit p-4 -text--Primary-50 flex flex-col items-center justify-between -bg--Primary-900 font-sans">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center text-center gap-2">
            <img src="src\assets\grid.png" alt="لوحة القيادة" className="w-6" />
            <p>لوحة القيادة</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <img src="src\assets\book.png" alt="المواد" className="w-6" />
            <p>المواد</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <img
              src="src\assets\clipboard-list.png"
              alt="الاختبارات"
              className="w-6"
            />
            <p>الاختبارات</p>
          </div>
        </div>
        <img
          src="src\assets\inter Avatar.png"
          alt="الملف الشخصي"
          className="w-12"
        />
      </nav>
    </>
  );
};

export default NavBar;
