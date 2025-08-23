import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

function PageFilter() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-[1500px] ml-[60px] m-auto bg-white p-4 shadow text-right rounded-xl">
      <h4 className="text-lg font-semibold mb-2">البحث السريع</h4>

      <div className="flex flex-row justify-between my-2">
        <div className="left">
          <span className="flex flex-row text-center items-center gap-2">
            اجمالي النتائج: 8 <FaUsers />
          </span>
        </div>

        <div className="w-[100vh] flex flex-row justify-end gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 cursor-pointer  rounded-[5px] px-4 py-2 border transition 
    ${
      showFilters
        ? "bg-white text-blue-600 border-blue-600"
        : "bg-white text-blue-600 border-blue-600"
    } 
    hover:bg-blue-600 hover:text-white active:scale-95`}
          >
            فلترة متقدمة
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path
                d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 
      320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 
      97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
              />
            </svg>
          </button>

          <div className="flex items-center border border-gray-300 rounded-[5px] w-[355px] overflow-hidden">
            <button className="px-2 py-3 rounded-[5px] border border-gray-500 hover:bg-gray-500 hover:text-white transition">
              <CiSearch />
            </button>

            <input
              type="text"
              className="flex-1 outline-none placeholder:text-right px-3 py-2"
              placeholder="البحث في الاسماء"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="grid grid-cols-3 gap-4 mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            dir="rtl"
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col text-right">
              <label className="mb-1 text-sm font-medium">المدينة</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 h-12 text-right placeholder:text-right"
                placeholder="ادخل اسم المدينة"
              />
            </div>

            <div className="flex flex-col text-right">
              <label className="mb-1 text-sm font-medium">العمر</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 h-12 text-right placeholder:text-right"
                placeholder="ادخل العمر"
              />
            </div>

            <div className="flex flex-col text-right">
              <label className="mb-1 text-sm font-medium">الوظيفة</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 h-12 text-right placeholder:text-right"
                placeholder="ادخل الوظيفة"
              />
            </div>

            <div className="flex flex-col text-right">
              <label className="mb-1 text-sm font-medium">الهاتف</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 h-12 text-right placeholder:text-right"
                placeholder="ادخل رقم الهاتف"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PageFilter;
