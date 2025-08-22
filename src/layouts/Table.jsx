import { Calendar, Edit, FileText, MessageCircle, Trash2 } from "lucide-react";
import React, { useState, useMemo } from "react";
// import ContactsTable from "./ContactsTable";

export default function Table() {
  const data = [
    {
      name: "أحمد علي",
      phone: "07712345678",
      address: "بغداد, العراق",
      status: "نشط",
      count: 5,
    },
    {
      name: "سارة محمد",
      phone: "07887654321",
      address: "بابل, العراق",
      status: "غير نشط",
      count: 2,
    },
    {
      name: "ابراهيم",
      phone: "07555555555",
      address: "كربلاء, العراق",
      status: "نشط",
      count: 8,
    },
    {
      name: "حسين صجمنه",
      phone: "07555555555",
      address: "كربلاء, العراق",
      status: "نشط",
      count: 9,
    },
    {
      name: "محمد كتيبه",
      phone: "07555555555",
      address: "كربلاء, العراق",
      status: "نشط",
      count: 14,
    },
    {
      name: "عباس سكيبه",
      phone: "07555555555",
      address: "كربلاء, العراق",
      status: "نشط",
      count: 17,
    },
    {
      name: "كرار الحلو",
      phone: "07555555555",
      address: "كربلاء, العراق",
      status: "نشط",
      count: 27,
    },
    {
      name: "عمر",
      phone: "07555555555",
      address: "كربلاء, العراق",
      status: "نشط",
      count: 12,
    },
    {
      name: "عثمان",
      phone: "07555555555",
      address: "كربلاء, العراق",
      status: "نشط",
      count: 11,
    },
    {
      name: "كمال",
      phone: "07555555555",
      address: "كربلاء, العراق",
      status: "نشط",
      count: 0,
    },
  ];

  return (
    <div className="w-[90%] m-auto text-right">
      <div className="relative overflow-x-auto">
        <div className="flex border-gray-300 rounded-[5px] border justify-between items-center p-2 bg-[rgba(248,249,250)]">
          {/* يسار */}
          <div className="bg-[rgba(248,249,250)] rounded-[5px] border border-b-black hover:bg-gray-600 transition duration-300">
            <button className="text-gray-500 p-2">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="table"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                ></path>
              </svg>
            </button>

             <button className=" text-[#fff] p-2 bg-gray-500">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="table"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                ></path>
              </svg>
            </button>
          </div>

          {/* يمين */}
          <div className="flex items-center gap-2">
            <h1>قائمة الموظفين</h1>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="table"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
              ></path>
            </svg>
          </div>
        </div>
        <table className="w-full text-sm text-right text-gray-500">
          <thead className="text-xs text-black uppercase bg-[#90b290] border border-blue-700 w-[1000px]">
            <tr>
              <th className="px-6 py-3">الإجراءات</th>
              <th className="px-6 py-3">العدد</th>
              <th className="px-6 py-3">الحالة</th>
              <th className="px-6 py-3">العنوان</th>
              <th className="px-6 py-3">الهاتف</th>
              <th className="px-6 py-3">الاسم</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4 flex gap-3">
                  <Edit size={18} className="text-blue-500 cursor-pointer" />
                  <MessageCircle
                    size={18}
                    className="text-green-500 cursor-pointer"
                  />
                  <Calendar
                    size={18}
                    className="text-yellow-500 cursor-pointer"
                  />
                  <FileText
                    size={18}
                    className="text-purple-500 cursor-pointer"
                  />
                  <Trash2 size={18} className="text-red-500 cursor-pointer" />
                </td>
                <td className="px-6 py-4">{item.count}</td>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
