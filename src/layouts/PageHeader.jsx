"use client"

import { FaRegFileExcel, FaRegUser, FaUsers } from "react-icons/fa"

function PageHeader({Title,Text,icon,btnone}) {
  return (
    <div className="flex flex-row items-center justify-between m-[20px] text-right w-[160vh] mt-[3%] "> 
      <div className="flex text-center items-center">
        <div className="flex text-center items-center p-2 rounded-sm border border-green-700 bg-white text-green-700 text-[13px]">
            <span>تصدير Excel</span>
            <FaRegFileExcel />
        </div>

        <div className="flex">
            <button type="button" class="focus:outline-none m-[8px] text-white bg-green-950 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{btnone}</button>
        </div>

      </div>
      <div className=" text-right">
        <div className="flex text-center items-center">
            <h4 className="text-[25px] ml-[120px] font-medium">{Title}</h4>
            <i className="text-[50px] text-green-900 ml-3">{icon}</i>

        </div>
        <p className="mr-[20px]">{Text}</p>
      </div>



    </div>
  )
}

export default PageHeader
