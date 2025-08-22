import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";

function PageFilter() {
  return (
    <div className="w-[90%] m-auto bg-white p-2 shadow text-right" >
            <h4>البحث السريع</h4>

      <div className=" flex flex-row justify-between my-2">
       
        <div className="left">
          <span className="flex flex-row text-center items-center">
            اجمالي النتائج: 8<FaUsers /> 
          </span>
        </div>

         <div className="w-[60%] flex flex-row justify-end"
         >


                    <div className="flex flex-row text-center items-center">
                        <button><CiSearch /></button>
                        <input type="text" className="border-2 rounded-md border-gray-500 w-[40%] px-3 py-1  " placeholder="البحث في الاسماء" name="" id="" />
                    </div>
                    <div className="flex flex-row text-center items-center">
                        <button><CiSearch /></button>
                        <input type="text" className="border-2 rounded-md border-gray-500 w-[40%] px-3 py-1  " placeholder="البحث في الاسماء" name="" id="" />
                    </div>
        </div>
      </div>
    </div>
  );
}

export default PageFilter;
