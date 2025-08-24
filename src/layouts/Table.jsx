import { Calendar, Edit, FileText, MessageCircle, Trash2 } from "lucide-react";
// import ContactsTable from "./ContactsTable";

export default function Table({titleone,titletow,titlethree,titlefour,titlefive,titlesix,list}) {
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
    <div className="w-[160vh] ml-[50px] m-auto text-right">
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
            <h1>{list}</h1>
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
          <thead className="text-xs text-black uppercase bg-[#cbe6d1] border-none">
            <tr>
              <th className="px-6 py-3 w-[160px]">{titlesix}</th>
              <th className="px-6 py-3">{titlefive}</th>
              <th className="px-6 py-3">{titlefour}</th>
              <th className="px-6 py-3">{titlethree}</th>
              <th className="px-6 py-3">{titletow}</th>
              <th className="px-6 py-3">{titleone}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4 flex gap-4">
                  <Edit size={32} className="text-blue-500" />
                  <MessageCircle size={32} className="text-green-500" />
                  <Calendar size={32} className="text-yellow-500" />
                  <FileText size={32} className="text-purple-500" />
                  <Trash2 size={32} className="text-red-500" />
                </td>
                <td className="px-6 py-4 text-right">{item.count}</td>
                <td className="px-6 py-4 text-right">{item.status}</td>
                <td className="px-6 py-4 text-right">{item.address}</td>
                <td className="px-6 py-4 text-right">{item.phone}</td>
                <td className="px-6 py-4 font-medium text-gray-900 text-right">
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
