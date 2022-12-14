import { CheckCircle } from "phosphor-react";

export function SubmitButton() {
  return (
    <button
      className="text-white bg-light-green px-4 py-1 flex items-center gap-2 rounded font-roboto hover:bg-dark-green active:scale-95 transition-all duration-300"
      type="submit"
    >
      <CheckCircle size={22} weight='bold' />
      Submit
    </button>
  )
}