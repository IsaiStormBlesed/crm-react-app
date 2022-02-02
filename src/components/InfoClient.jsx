export const InfoClient = ({ label, children }) => {
  return (
    <div className="bg-teal-50 w-full rounded-md shadow-md mb-2">
      <div className="p-5">
        <h3 className="text-4xl font-bold mb-5 tracking-wider">
          {label}:
        </h3>

        <p className="bg-emerald-600 inline-block py-5 px-10 text-2xl text-teal-50 rounded-md font-semibold tracking-wider hover:scale-105 hover:bg-emerald-300 hover:text-teal-900 transition-all ease-in-out delay-75"
        >
          { children }
        </p>
      </div>
    </div>
  )
}