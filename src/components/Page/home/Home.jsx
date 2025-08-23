import Master from "../../../Master";
import "./Home.css";
import { motion } from "framer-motion";

import {
  FaUser,
  FaTruck,
  FaChartBar,
  FaBox,
  FaCogs,
  FaUsers,
  FaBiking,
  FaCalculator,
  FaHome,
  FaCog,
  FaQuestionCircle,
  FaGift,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Home() {
  const cardsData = [
    {
      icon: <FaUser size={24} />,
      number: 0,
      title: "المدراء",
      color: "linear-gradient(135deg,#6a11cb,#2575fc)",
    },
    {
      icon: <FaTruck size={24} />,
      number: 2,
      title: "الشحنات",
      color: "linear-gradient(135deg,#00c6ff,#0072ff)",
    },
    {
      icon: <FaChartBar size={24} />,
      number: 3,
      title: "الناقلين",
      color: "linear-gradient(135deg,#f7971e,#ffd200)",
    },
    {
      icon: <FaBox size={24} />,
      number: 4,
      title: "التجار",
      color: "linear-gradient(135deg,#11998e,#38ef7d)",
    },
    {
      icon: <FaCogs size={24} />,
      number: 5,
      title: "المستخدمين",
      color: "linear-gradient(135deg,#ff416c,#ff4b2b)",
    },
    {
      icon: <FaUsers size={24} />,
      number: 6,
      title: "المنتجات",
      color: "linear-gradient(135deg,#485563,#29323c)",
    },
    {
      icon: <FaBiking size={24} />,
      number: 7,
      title: "المندوبين",
      color: "linear-gradient(135deg,#00b09b,#96c93d)",
    },
    {
      icon: <FaCalculator size={24} />,
      number: 8,
      title: "الحسابات",
      color: "linear-gradient(135deg,#8e2de2,#4a00e0)",
    },
    {
      icon: <FaHome size={24} />,
      number: 9,
      title: "الرئيسية",
      color: "linear-gradient(135deg,#1abc9c,#16a085)",
    },
    {
      icon: <FaCog size={24} />,
      number: 10,
      title: "الخيارات",
      color: "linear-gradient(135deg,#6c757d,#495057)",
    },
    {
      icon: <FaQuestionCircle size={24} />,
      number: 11,
      title: "الأسئلة",
      color: "linear-gradient(135deg,#f12711,#f5af19)",
    },
    {
      icon: <FaGift size={24} />,
      number: 12,
      title: "الهدايا",
      color: "linear-gradient(135deg,#ff512f,#dd2476)",
    },
    {
      icon: <FaGift size={24} />,
      number: 12,
      title: "الهدايا",
      color: "linear-gradient(135deg,#ff512f,#dd2476)",
    },
    {
      icon: <FaGift size={24} />,
      number: 12,
      title: "الهدايا",
      color: "linear-gradient(135deg,#ff512f,#dd2476)",
    },
    {
      icon: <FaGift size={24} />,
      number: 12,
      title: "الهدايا",
      color: "linear-gradient(135deg,#ff512f,#dd2476)",
    },
    {
      icon: <FaGift size={24} />,
      number: 12,
      title: "الهدايا",
      color: "linear-gradient(135deg,#ff512f,#dd2476)",
    },
  ];

  return (
    <Master>
      <div className="main-content slide-up">
        <div className="floating-toolbar ">
          <a href="/" className="toolbar-icon" title="مندوب جديد">
            <svg
              className=""
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="users-gear"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"
              ></path>
            </svg>
            <i className="fas fa-users-cog"></i>
          </a>

          <a
            href="/mandob_map"
            className="toolbar-icon"
            title="مراقبة المندوبين"
          >
            <svg
              className=""
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="map-location-dot"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              ></path>
            </svg>
            <i className="fas fa-map-marked-alt"></i>
          </a>

          <a
            href="/captain_map"
            className="toolbar-icon "
            title="مراقبة السائقين"
          >
            <svg
              className=""
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              ></path>
            </svg>
            <i className="fas fa-plus"></i>
          </a>
        </div>

        <br />
        <br />

        <div className="page-title ">
          <h1 className="flex ml-[400px] flex-row justify-center">
            لوحة التحكم الرئيسية
            <svg
              // className="sav"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="gauge-high"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
              ></path>
            </svg>
          </h1>
        </div>

        <div className="cards">
          <div className="cardat">
            <svg
              className="svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="users-gear"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"
              ></path>
            </svg>
            <div className="p_card">مراقبة السائقين</div>
            <div className="p-div">تتبع مواقع وحالات السائقين</div>
          </div>

          <div className="cardat">
            <svg
              className="svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="map-location-dot"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              ></path>
            </svg>
            <div className="p_card">مراقبة المندوبين</div>
            <div className="p-div">تتبع مواقع ونطاقات عمل المندوبين</div>
          </div>
        </div>

        <div className="section-title w-[1550px] flex flex-row justify-end text-center items-center">
          إحصائيات النظام
          <svg
            className="svg-inline--fa fa-chart-bar me-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chart-bar"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
            ></path>
          </svg>
        </div>

        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{ background: card.color }}
            >
              <div className="card-text">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.number}</h3>
                <p>{card.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title w-[1540px] flex flex-row justify-end text-center items-center">
          النشاط الأخير
          <svg
            class="svg-inline--fa fa-clock me-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="clock"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
            ></path>
          </svg>{" "}
        </div>
      </div>

      <div className="card_fotter">
        <div className="card_fotter_item shadow-2xl ">
          <div className="p_footer flex flex-row items-center">
            <p> الشحنات الأخيرة</p>
            <svg
              class="svg-inline--fa fa-truck-fast me-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="truck-fast"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
              ></path>
            </svg>
          </div>
          <div className="title_card_fotter_tow">
            <p>لا توجد شحنات حديثة</p>
          </div>
        </div>

        <div className="card_fotter_item shadow-2xl ">
          <div className="p_footer_two flex flex-row items-center">
            <p> المندوبين المضافين حديثاً</p>
            <svg
              class="svg-inline--fa fa-user-plus me-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user-plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
              ></path>
            </svg>{" "}
          </div>
          <div className="title_card_fotter_tow">
            <p>لا توجد شحنات حديثة</p>
          </div>
        </div>
      </div>
    </Master>
  );
}

export default Home;
