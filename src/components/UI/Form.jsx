import { RiErrorWarningLine } from "react-icons/ri"

function Form({title,icon,children}) {
  return (
   <div className="w-[90%] m-auto text-right">
      <div className="title_form p-3 rounded-tl-md rounded-tr-md bg-green-700 flex flex-row text-white justify-end items-center gap-2">
        <h4>معلومات التقرير الأساسية</h4>
        <RiErrorWarningLine size={20} />
      </div>
      <div className="form_content bg-white p-5 text-right flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}

export default Form
