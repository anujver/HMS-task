import { GoLinkExternal } from "react-icons/go";
import { IoFilter } from "react-icons/io5";
import Sphoto from "../assets/studentPhoto.jpg";
import { LuEye } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { IoLogInOutline } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const MainSlide = () => {
  return (
    <>
      <div
        className="maincontainer flex h-[280px] w-[1250px] bg-transparent -mt-[625px] ml-[270px]"
        style={{ borderRadius: "8px" }}
      >
        {/* First Row */}
        <div className="firstline flex bg-transparent">
          {/* Box1 */}
          <div
            className="Studentscounting h-[227px] w-[999px] ml-10 -mt-[75px] bg-[#2E2E2E]"
            style={{ border: "1px solid black", borderRadius: "10px" }}
          >
            {/* Items container 1 */}
            <div className="item1container flex bg-transparent">
              {/* Item 1 */}
              <a href="#" className="bg-transparent cursor-pointer">
                <div
                  className="item1 w-[223px] h-[79px] mt-5 ml-6"
                  style={{
                    borderRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                >
                  <div className="title flex bg-transparent">
                    <h1 className="text-white bg-transparent ml-5 pt-3">
                      Total Students
                    </h1>
                    <div className="link h-5 w-5 mt-4 ml-3 text-white">
                      <GoLinkExternal />
                    </div>
                  </div>
                  <div className="studentsnum">
                    <h1 className="text-white text-2xl bg-transparent ml-5">
                      3569
                    </h1>
                  </div>
                </div>{" "}
              </a>
              {/* Item 1 end */}
              {/* Item 2 */}
              <a href="#" className="bg-transparent cursor-pointer">
                {" "}
                <div
                  className="item2 w-[223px] h-[79px] mt-5 ml-4"
                  style={{
                    borderRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                >
                  <div className="title flex bg-transparent">
                    <h1 className="text-white bg-transparent ml-5 pt-3">
                      In hostel
                    </h1>
                    <div className="link h-5 w-5 mt-4 ml-3 text-white">
                      <GoLinkExternal />
                    </div>
                  </div>
                  <div className="studentsnum">
                    <h1 className="text-[aqua] text-2xl bg-transparent ml-5">
                      1569
                    </h1>
                  </div>
                </div>{" "}
              </a>
              {/* Item 2 End */}
              {/* Item 3 */}
              <a href="#" className="bg-transparent cursor-pointer">
                <div
                  className="item3 w-[223px] h-[79px] mt-5 ml-4"
                  style={{
                    borderRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                >
                  <div className="title flex bg-transparent">
                    <h1 className="text-white bg-transparent ml-5 pt-3">
                      Outside Hostel
                    </h1>
                    <div className="link h-5 w-5 mt-4 ml-3 text-white">
                      <GoLinkExternal />
                    </div>
                  </div>
                  <div className="studentsnum">
                    <h1 className="text-white text-2xl bg-transparent ml-5">
                      2500
                    </h1>
                  </div>
                </div>{" "}
              </a>
              {/* Item 3 End */}
              {/* Item 4 */}{" "}
              <div
                className="fees h-[178px] w-[223px] mt-5 ml-5"
                style={{ border: "1px solid whit", borderRadius: "10px" }}
              >
                <p className="text-white bg-transparent pt-5 ml-4">
                  Fees Defaulter
                </p>
                <h1
                  className="text-yellow-400 ml-4 mt-3 text-3xl"
                  style={{ fontWeight: "600" }}
                >
                  150
                </h1>
                <button
                  className="text-white mt-5 ml-[9px] text-center w-[205px] h-[52px] bg-[#111111]"
                  style={{ borderRadius: "8px" }}
                >
                  View list
                </button>
              </div>{" "}
              {/* Item 4 End */}
            </div>
            {/* Items container 1 End */}

            {/* Items container 2*/}
            <div className="item1container flex bg-transparent">
              {/* Item 5 */}
              <a href="#" className="bg-transparent cursor-pointer">
                <div
                  className="item5 w-[223px] h-[79px] -mt-20 ml-6"
                  style={{
                    borderRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                >
                  <div className="title flex bg-transparent">
                    <h1 className="text-white bg-transparent ml-5 pt-2">
                      Students Assigned
                    </h1>
                    <div className="link h-5 w-5 mt-3 ml-3 text-white">
                      <GoLinkExternal />
                    </div>
                  </div>
                  <div className="studentsnum">
                    <h1 className="text-pink-600 text-2xl bg-transparent ml-5">
                      2569
                    </h1>
                  </div>
                </div>{" "}
              </a>
              {/* Item 5 end */}

              {/* Item 6 */}
              <a href="#" className="bg-transparent cursor-pointer">
                {" "}
                <div
                  className="item6 w-[223px] h-[79px] -mt-20 ml-4"
                  style={{
                    borderRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                >
                  <div className="title flex bg-transparent">
                    <h1 className="text-white bg-transparent ml-5 pt-2">
                      Students Removed
                    </h1>
                    <div className="link h-5 w-5 mt-3 ml-3 text-white">
                      <GoLinkExternal />
                    </div>
                  </div>
                  <div className="studentsnum">
                    <h1 className="text-red-600 text-2xl bg-transparent ml-5">
                      1000
                    </h1>
                  </div>
                </div>{" "}
              </a>
              {/* Item 6 End */}
            </div>
            {/* Items container 2 End */}
          </div>
          {/* Box1 End */}
          {/* Box 2 */}
          <div className="buttonContainer w-72 h-72 ml-10 -mt-11">
            {/* Buttons */}
            {/* Button 1 */}
            <button
              data-toggle="modal fade"
              className="btn1 text-white text-center -mt-36 h-[72px] w-[298px]"
              style={{ borderRadius: "8px", border: "2px solid aqua" }}
            >
              <p className="text-[aqua] text-2xl">+Add Students</p>
            </button>
          </div>
          {/* Button 1 End  */}

          {/* Button 2 */}
          <button
            className="btn2 text-white text-center -ml-[288px] h-[72px] w-[298px] mt-5"
            style={{ borderRadius: "8px", border: "2px solid red" }}
          >
            <p className="text-red-600 text-2xl">Remove Students</p>
          </button>
          {/* Button 2 End */}

          {/* Box 2 end */}
        </div>
        {/* First Row End */}
      </div>

      {/* Second Row */}
      <div className="secondLine flex bg-transparent">
        <div
          className="StudentUpdate h-[460px] w-[488px] ml-[310px] -mt-[115px] bg-[#2E2E2E]"
          style={{ borderRadius: "10px" }}
        >
          <div className="title flex bg-transparent">
            <a href="#" className="bg-transparent cursor-pointer">
              {" "}
              <div className="heading flex bg-transparent">
                <h1
                  className="text-white bg-transparent ml-6 pt-5"
                  style={{ fontSize: "16px" }}
                >
                  Students
                </h1>
                <div className="link h-5 w-5 mt-6 ml-2 text-white bg-transparent">
                  <GoLinkExternal className="bg-transparent" />
                </div>
              </div>{" "}
            </a>
            {/* Search icon */}

            <div className="searchbar flex bg-transparent">
              <div className="input bg-transparent flex">
                <div
                  className="searchicon bg-[#111111] -ml-[95px] text-white w-24 h-[45px] mt-16"
                  style={{ borderRadius: "10px" }}
                >
                  <CiSearch className="bg-transparent text-2xl mt-[10px] ml-3" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#111111] w-[295px] h-[45px] mt-16 -ml-[55px] text-[18px] pl-1
                   focus:outline-none
                   text-white"
                  style={{
                    borderRadius: "10px",
                    fontFamily: "Montserrat",
                  }}
                />

                <div className="filterbtn bg-transparent w-32 align-middle">
                  <button
                    className="w-[110px] h-[45px] bg-[#2E2E2E] text-white mt-[64px] ml-2"
                    style={{ border: "1px solid white", borderRadius: "10px" }}
                  >
                    <div className="buttonitems h-6 bg-transparent">
                      <IoFilter className="bg-transparent text-[25px] ml-3 " />
                      <h1 className="white bg-transparent text-[22px] -mt-[30px] ml-8">
                        Filter
                      </h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Student list */}
          <div className="studentlist h-[325px] w-[480px] mt-6 ml-4 bg-transparent overflow-y-scroll no-scrollbar">
            {/* Card 1 */}
            <div
              className="studentprofile h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 1 end */}
            {/* Card 2 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 2 end*/}
            {/* Card 3 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 3 end*/}
            {/* Card 4 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 4 end*/}
            {/* Card 5 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 5 end*/}
            {/* Card 6 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 6 end*/}
            {/* Card 7 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 7 end*/}
            {/* Card 8 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 8 end*/}
            {/* Card 9 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 9 end*/}
            {/* Card 10 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 10 end*/}
            {/* Card 11 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 11 end*/}
            {/* Card 12 */}
            <div
              className="studentprofile mt-3 h-[55px] w-[458px] flex bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div
                className="studentimg h-10 w-10 mt-[6.5px] ml-5"
                style={{
                  borderRadius: "50%",
                  backgroundImage: `url(${Sphoto})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="name bg-transparent text-white text-[20px] mt-3 ml-5">
                Abhinav srivastva
              </h1>
              <LuEye className="text-white bg-transparent text-2xl mt-4 ml-40" />
            </div>
            {/* Card 12 end*/}
          </div>
          {/* Student list 1 end */}
        </div>
        <div
          className="defaulter  h-[458px] w-[489px] -mt-[114px] ml-5 bg-[#2E2E2E]"
          style={{ borderRadius: "10px" }}
        >
          <div className="title bg-transparent">
            <a href="#" className="bg-transparent cursor-pointer">
              {" "}
              <div className="subject bg-transparent flex">
                <h1
                  className="text-white bg-transparent ml-6 pt-5"
                  style={{ fontSize: "16px" }}
                >
                  Defaulters students
                </h1>
                <div className="link2 h-5 w-5 mt-6 ml-2 text-white bg-transparent">
                  <GoLinkExternal className="bg-transparent" />
                </div>
              </div>{" "}
            </a>
            <div className="searchbar2 flex bg-transparent">
              <div className="input2 flex ml-1  bg-transparent">
                <div
                  className="searchicon bg-[#111111] ml-[12px] text-white w-24 h-[45px] mt-5"
                  style={{ borderRadius: "10px" }}
                >
                  <CiSearch className="bg-transparent text-2xl mt-[10px] ml-3" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#111111] w-[295px] h-[45px] mt-5 -ml-[62px] text-[18px] pl-3 text-white focus:outline-none"
                  style={{ borderRadius: "10px", fontFamily: "Montserrat" }}
                />
                <div className="filterbtn2 bg-transparent w-32 align-middle">
                  <button
                    className="w-[110px] h-[45px] bg-[aqua] text-white mt-5 ml-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <h1 className="text-black text-[20px] bg-transparent -mt-[1px] -ml-2 ">
                      +Add
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* scroll Box */}
          <div className="studentlist2 h-[320px] w-[480px] mt-6 ml-1 bg-transparent overflow-y-scroll no-scrollbar">
            {/* Card 1  */}
            <div
              className="studentIssue w-[450px] h-[240px] ml-3 bg-[#111111] "
              style={{ borderRadius: "10px" }}
            >
              <div className="studentnameimage bg-transparent flex">
                <div
                  className="studentimg flex h-9 w-9 mt-[15px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[20px] mt-5 ml-3">
                  Abhinav srivastva
                </h1>
                <LuEye className="text-white bg-transparent text-2xl mt-6 ml-40" />
              </div>
              <p className="bg-transparent text-white  mt-7 ml-5">
                Broke 4 Test Tubes in Hostel Mess
              </p>
              <div className="fine mt-7 flex bg-transparent">
                <div
                  className="money bg-transparent h-9 w-32 ml-4 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-white ml-5 mt-1">
                    Fine : 1,200{" "}
                  </h1>
                </div>
                <div
                  className="Date bg-transparent flex h-9 w-[150px] ml-3 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <CiCalendar className="bg-transparent text-white text-2xl mt-1 ml-2" />

                  <h1 className="bg-transparent text-[18px] text-white ml-1 mt-[3.5px]">
                    12 Nov 2022{" "}
                  </h1>
                </div>
              </div>
              {/* Buttons */}
              <div className="Buttons mt-5 flex bg-transparent">
                <button
                  className="money bg-transparent h-10 w-48 ml-4 "
                  style={{ border: "1px solid red", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-red-700">
                    Remove Defaulter
                  </h1>
                </button>
                <button
                  className="money bg-transparent h-10 w-48 ml-3 "
                  style={{ border: "1px solid aqua", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-[aqua]">
                    Send Payment Link
                  </h1>
                </button>
              </div>
            </div>
            {/* Card 1 end */}
            {/* Card 2  */}
            <div
              className="studentIssue mt-3 w-[450px] h-[240px] ml-3 bg-[#111111] "
              style={{ borderRadius: "10px" }}
            >
              <div className="studentnameimage bg-transparent flex">
                <div
                  className="studentimg flex h-9 w-9 mt-[15px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[20px] mt-5 ml-3">
                  Abhinav srivastva
                </h1>
                <LuEye className="text-white bg-transparent text-2xl mt-6 ml-40" />
              </div>
              <p className="bg-transparent text-white mt-7 ml-5">
                Broke 4 Test Tubes in Hostel Mess
              </p>
              <div className="fine mt-7 flex bg-transparent">
                <div
                  className="money bg-transparent h-9 w-32 ml-4 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-white ml-5 mt-1">
                    Fine : 1,200{" "}
                  </h1>
                </div>
                <div
                  className="Date bg-transparent flex h-9 w-[150px] ml-3 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <CiCalendar className="bg-transparent text-white text-2xl mt-1 ml-2" />

                  <h1 className="bg-transparent text-[18px] text-white ml-1 mt-[3.5px]">
                    12 Nov 2022{" "}
                  </h1>
                </div>
              </div>
              {/* Buttons */}
              <div className="Buttons mt-5 flex bg-transparent">
                <button
                  className="money bg-transparent h-10 w-48 ml-4 "
                  style={{ border: "1px solid red", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-red-700">
                    Remove Defaulter
                  </h1>
                </button>
                <button
                  className="money bg-transparent h-10 w-48 ml-3 "
                  style={{ border: "1px solid aqua", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-[aqua]">
                    Send Payment Link
                  </h1>
                </button>
              </div>
            </div>
            {/* Card 2 end */}
            {/* Card 3  */}
            <div
              className="studentIssue mt-3 w-[450px] h-[240px] ml-3 bg-[#111111] "
              style={{ borderRadius: "10px" }}
            >
              <div className="studentnameimage bg-transparent flex">
                <div
                  className="studentimg flex h-9 w-9 mt-[15px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[20px] mt-5 ml-3">
                  Abhinav srivastva
                </h1>
                <LuEye className="text-white bg-transparent text-2xl mt-6 ml-40" />
              </div>
              <p className="bg-transparent text-white mt-7 ml-5">
                Broke 4 Test Tubes in Hostel Mess
              </p>
              <div className="fine mt-7 flex bg-transparent">
                <div
                  className="money bg-transparent h-9 w-32 ml-4 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-white ml-5 mt-1">
                    Fine : 1,200{" "}
                  </h1>
                </div>
                <div
                  className="Date bg-transparent flex h-9 w-[150px] ml-3 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <CiCalendar className="bg-transparent text-white text-2xl mt-1 ml-2" />

                  <h1 className="bg-transparent text-[18px] text-white ml-1 mt-[3.5px]">
                    12 Nov 2022{" "}
                  </h1>
                </div>
              </div>
              {/* Buttons */}
              <div className="Buttons mt-5 flex bg-transparent">
                <button
                  className="money bg-transparent h-10 w-48 ml-4 "
                  style={{ border: "1px solid red", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-red-700">
                    Remove Defaulter
                  </h1>
                </button>
                <button
                  className="money bg-transparent h-10 w-48 ml-3 "
                  style={{ border: "1px solid aqua", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-[aqua]">
                    Send Payment Link
                  </h1>
                </button>
              </div>
            </div>
            {/* Card 3 end */}
            {/* Card 4  */}
            <div
              className="studentIssue mt-3 w-[450px] h-[240px] ml-3 bg-[#111111] "
              style={{ borderRadius: "10px" }}
            >
              <div className="studentnameimage bg-transparent flex">
                <div
                  className="studentimg flex h-9 w-9 mt-[15px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[20px] mt-5 ml-3">
                  Abhinav srivastva
                </h1>
                <LuEye className="text-white bg-transparent text-2xl mt-6 ml-40" />
              </div>
              <p className="bg-transparent text-white mt-7 ml-5">
                Broke 4 Test Tubes in Hostel Mess
              </p>
              <div className="fine mt-7 flex bg-transparent">
                <div
                  className="money bg-transparent h-9 w-32 ml-4 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-white ml-5 mt-1">
                    Fine : 1,200{" "}
                  </h1>
                </div>
                <div
                  className="Date bg-transparent flex h-9 w-[150px] ml-3 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <CiCalendar className="bg-transparent text-white text-2xl mt-1 ml-2" />

                  <h1 className="bg-transparent text-[18px] text-white ml-1 mt-[3.5px]">
                    12 Nov 2022{" "}
                  </h1>
                </div>
              </div>
              {/* Buttons */}
              <div className="Buttons mt-5 flex bg-transparent">
                <button
                  className="money bg-transparent h-10 w-48 ml-4 "
                  style={{ border: "1px solid red", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-red-700">
                    Remove Defaulter
                  </h1>
                </button>
                <button
                  className="money bg-transparent h-10 w-48 ml-3 "
                  style={{ border: "1px solid aqua", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-[aqua]">
                    Send Payment Link
                  </h1>
                </button>
              </div>
            </div>
            {/* Card 4 end */}
            {/* Card 5  */}
            <div
              className="studentIssue mt-3 w-[450px] h-[240px] ml-3 bg-[#111111] "
              style={{ borderRadius: "10px" }}
            >
              <div className="studentnameimage bg-transparent flex">
                <div
                  className="studentimg flex h-9 w-9 mt-[15px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[20px] mt-5 ml-3">
                  Abhinav srivastva
                </h1>
                <LuEye className="text-white bg-transparent text-2xl mt-6 ml-40" />
              </div>
              <p className="bg-transparent text-white mt-7 ml-5">
                Broke 4 Test Tubes in Hostel Mess
              </p>
              <div className="fine mt-7 flex bg-transparent">
                <div
                  className="money bg-transparent h-9 w-32 ml-4 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-white ml-5 mt-1">
                    Fine : 1,200{" "}
                  </h1>
                </div>
                <div
                  className="Date bg-transparent flex h-9 w-[150px] ml-3 "
                  style={{ border: "1px solid white", borderRadius: "10px" }}
                >
                  <CiCalendar className="bg-transparent text-white text-2xl mt-1 ml-2" />

                  <h1 className="bg-transparent text-[18px] text-white ml-1 mt-[3.5px]">
                    12 Nov 2022{" "}
                  </h1>
                </div>
              </div>
              {/* Buttons */}
              <div className="Buttons mt-5 flex bg-transparent">
                <button
                  className="money bg-transparent h-10 w-48 ml-4 "
                  style={{ border: "1px solid red", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-red-700">
                    Remove Defaulter
                  </h1>
                </button>
                <button
                  className="money bg-transparent h-10 w-48 ml-3 "
                  style={{ border: "1px solid aqua", borderRadius: "10px" }}
                >
                  <h1 className="bg-transparent text-[18px] text-[aqua]">
                    Send Payment Link
                  </h1>
                </button>
              </div>
            </div>
            {/* Card 5 end */}
          </div>
        </div>
        {/* Defaulter end */}
        {/* Student update */}
        <div
          className="defaulter  h-[458px] w-[350px] -mt-[114px] ml-5 bg-[#2E2E2E]"
          style={{ borderRadius: "10px" }}
        >
          <a href="#" className="bg-transparent cursor-pointer">
            {" "}
            <div className="subject bg-transparent flex">
              <h1
                className="text-white bg-transparent ml-6 pt-5"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                Students Update
              </h1>
              <div className="link2 h-5 w-5 mt-[26px] ml-1 text-white bg-transparent">
                <GoLinkExternal className="bg-transparent text-[20px]" />
              </div>
            </div>{" "}
          </a>
          {/* scroll Box 3 */}
          <div className="studentlist2 h-[378px] w-[342px] mt-6 ml-1 bg-transparent overflow-y-scroll no-scrollbar">
            {/* Card 1 */}
            <div
              className="studentprofile ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <IoLogInOutline className="bg-transparent text-[aqua] ml-20 -mt-5 text-[20px]" />
                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 1 end */}
            {/* Card 2 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <HiOutlineLogin className="bg-transparent text-[yellow] ml-[82px] -mt-5 text-[20px]" />

                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 2 end */}
            {/* Card 3 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <IoLogInOutline className="bg-transparent text-[aqua] ml-20 -mt-5 text-[20px]" />
                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 3 end */}
            {/* Card 4 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <HiOutlineLogin className="bg-transparent text-[yellow] ml-[82px] -mt-5 text-[20px]" />

                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 4 end */}
            {/* Card 5 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <IoLogInOutline className="bg-transparent text-[aqua] ml-20 -mt-5 text-[20px]" />
                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 5 end */}
            {/* Card 6 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <HiOutlineLogin className="bg-transparent text-[yellow] ml-[82px] -mt-5 text-[20px]" />

                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 6 end */}
            {/* Card 7 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <IoLogInOutline className="bg-transparent text-[aqua] ml-20 -mt-5 text-[20px]" />
                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 7 end */}
            {/* Card 8 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <HiOutlineLogin className="bg-transparent text-[yellow] ml-[82px] -mt-5 text-[20px]" />

                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 8 end */}
            {/* Card 9 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <IoLogInOutline className="bg-transparent text-[aqua] ml-20 -mt-5 text-[20px]" />
                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 9 end */}
            {/* Card 10 */}
            <div
              className="studentprofile mt-2 ml-2 h-[75px] w-[325px]  bg-[#111111]"
              style={{ borderRadius: "10px" }}
            >
              <div className="imgnamecon bg-transparent flex">
                <div
                  className="studentimg h-12 w-12 mt-[11px] ml-5"
                  style={{
                    borderRadius: "50%",
                    backgroundImage: `url(${Sphoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="name bg-transparent text-white text-[18px] mt-3 ml-4">
                  Abhinav srivastva
                </h1>
              </div>
              <div className="time bg-transparent">
                <HiOutlineLogin className="bg-transparent text-[yellow] ml-[82px] -mt-5 text-[20px]" />

                <p className="text-white bg-transparent ml-[105px] -mt-[22px]">
                  12:30
                </p>
              </div>
            </div>
            {/* Card 10 end */}
          </div>
        </div>
        {/* Student update End */}
      </div>
    </>
  );
};

export default MainSlide;
