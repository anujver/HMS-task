import logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <>
      {/* Main div who contains whole items of navbar */}
      <div className="maincontainer flex bg-[#202020] w-1738 h-[95px]">
        {/* LOGO Container */}
        <div className="logo h-9 w-20 ml-10 mt-12 bg-transparent">
          <div
            className="logoSign h-6 w-6 flex"
            style={{ backgroundColor: "aqua", borderRadius: "50%" }}
          ></div>
          <h1 className="bg-transparent text-2xl text-white -mt-7 ml-7">HMS</h1>
        </div>
        {/* Logo end */}

        {/* Navbar items */}
      </div>
    </>
  );
};

export default Navbar;
