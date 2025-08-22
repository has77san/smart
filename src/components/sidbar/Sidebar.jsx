import React, { useState } from "react";
import "./Sidbar.css";
import {
  Home,
  UserCog,
  Users,
  Truck,
  Bike,
  BarChart3,
  Package,
  Calculator,
  Settings,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { label: "الرئيسية", icon: <Home size={18} />, path: "/" },
    {
      label: "المدراء",
      icon: <UserCog size={18} />,
      subItems: [
        { label: "الموظفين", icon: <Users size={16} />, path: "/employees" },
        { label: "الصلاحيات", icon: <Settings size={16} /> },
      ],
    },
    {
      label: "المستخدمين",
      icon: <Users size={18} />,
      subItems: [
        { label: "المستخدمين", icon: <Users size={16} />, path: "/users" },
        { label: "التجار", icon: <Settings size={16} />, path: "/list_users" },
      ],
    },
    {
      label: "الناقلين",
      icon: <Truck size={18} />,
      subItems: [
        { label: "الناقلين", icon: <Users size={16} />, path: "/carrie" },
        { label: "السائقين", icon: <Settings size={16} />, path: "/drivers" },
        { label: "المركبات", icon: <Settings size={16} />, path: "/Cars" },
      ],
    },
    { label: "المندوبين", icon: <Bike size={18} />, path: "/delegates" },
    {
      label: "التقارير",
      icon: <BarChart3 size={18} />,
      subItems: [
        {
          label: "انشاء تقرير استبياني",
          icon: <Users size={16} />,
          path: "/create_custom_report",
        },
        {
          label: "تقارير استبيانية",
          icon: <Settings size={16} />,
          path: "/drivers",
        },
        { label: "تقارير دورية", icon: <Settings size={16} />, path: "/Cars" },
        {
          label: "تثارير الفواتير",
          icon: <Users size={16} />,
          path: "/create_custom_report",
        },
        {
          label: "الاسئلة اليومية",
          icon: <Settings size={16} />,
          path: "/drivers",
        },
        {
          label: "الاسئلة الاسبوعية",
          icon: <Settings size={16} />,
          path: "/Cars",
        },
        {
          label: "الاسئلة الشهرية ",
          icon: <Users size={16} />,
          path: "/create_custom_report",
        },
        {
          label: "الاسئلة السنوية",
          icon: <Settings size={16} />,
          path: "/drivers",
        },
      ],
    },
    { label: "الشحنات", icon: <Package size={18} />, path: "/shipments" },
    {
      label: "محاسبة",
      icon: <Calculator size={18} />,
      subItems: [
        {
          label: "سحب وايداع الرصيد ",
          icon: <Users size={16} />,
          path: "/carrie",
        },
        {
          label: "اكواد الرصيد",
          icon: <Settings size={16} />,
          path: "/drivers",
        },
        { label: "الغرامات", icon: <Settings size={16} />, path: "/Cars" },
        {
          label: " (soon) الحسابات ",
          icon: <Settings size={16} />,
          path: "/Cars",
        },
      ],
    },
    { label: "تعريفات النظام", icon: <Settings size={18} /> },
    {
      label: "اخرى",
      icon: <MoreHorizontal size={18} />,
      subItems: [
        { label: "اشعارات ", icon: <Users size={16} />, path: "/carrie" },
        { label: "اعدادات", icon: <Settings size={16} />, path: "/drivers" },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidbar_header">
        <div className="logo">
          <h1>
            {" "}
            شحنكو <span>.</span>
          </h1>
        </div>

        <div className="user-info">
          <div className="header_active">
            {/* أيقونة الخروج */}
            <a href="" className="header_btn">
              <svg
                className="svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="right-from-bracket"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                ></path>
              </svg>
            </a>

            {/* أيقونة الإشعارات */}
            <a href="" className="header_btn">
              <svg
                className="svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                ></path>
              </svg>
            </a>

            {/* معلومات المستخدم */}
            <div className="user-details">
              <p>
                زين العابدين <span>مبرمج</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <ul className="w-full">
        {menuItems.map((item, index) => (
          <li key={index} className="w-full">
            {item.subItems ? (
              <>
                <div
                  className="menu-item flex flex-row justify-between has-sub"
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex flex-row">
                    <span className="icon-sidebar">{item.icon}</span>
                    <span className=" mx-2">{item.label}</span>
                  </div>
                  <span className="arrow">
                    {openDropdown === index ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                </div>
                {openDropdown === index && (
                  <ul className="submenu">
                    {item.subItems.map((sub, subIndex) => (
                      <li key={subIndex} className="submenu-item flex flex-row">
                        {sub.path ? (
                          <Link
                            to={sub.path}
                            className="flex items-center w-full"
                          >
                            <span className="icon-sidebar">{sub.icon}</span>
                            <span className=" mx-2">{sub.label}</span>
                          </Link>
                        ) : (
                          <>
                            <span className="icon-sidebar">{sub.icon}</span>
                            <span className=" mx-2">{sub.label}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <li className="menu-item flex flex-row">
                {item.path ? (
                  <Link to={item.path} className="flex items-center w-full">
                    <span className="icon-sidebar">{item.icon}</span>
                    <span className=" mx-2">{item.label}</span>
                  </Link>
                ) : (
                  <div className="flex items-center w-full">
                    <span className="icon-sidebar">{item.icon}</span>
                    <span className=" mx-2">{item.label}</span>
                  </div>
                )}
              </li>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
