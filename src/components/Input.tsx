interface InputProps {
  type: string
  label: string
  inputId: string
  width?: string
}

export function Input({ type, label, inputId, width }: InputProps) {
  return (
    <div className="font-roboto">
      <label
        className="text-zinc-400 block font-light"
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        type={type}
        className={`${width || 'w-12'} w-12 h-9 px-1.5 text-white bg-zinc-800 outline-none border-b border-zinc-400`}
        name={inputId}
      />
    </div>
  )
}