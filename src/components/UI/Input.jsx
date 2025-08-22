
function Input({title,icon,value,description,placeholder}) {
  return (
     <div className="w-full">
      <div className="flex flex-row justify-end items-center gap-1 mb-1">
        <h4 className="text-right">{title}</h4>
        {icon && <span className="text-green-800">{icon}</span>}
      </div>
      <input
        type="text"
        className="w-full p-3 rounded-md text-right border border-gray-300 outline-none focus:border-green-500"
        placeholder={placeholder}
      />
      {description && <p className="text-[12px] mt-1 text-gray-400">{description}</p>}
    </div>
  )
}

export default Input
