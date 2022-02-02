import { useNavigate } from "react-router-dom"

export const Client = ({ client }) => {

  const navigate = useNavigate()
  
  const { name, company, email, id } = client
  
  return (
    <tr className="border-b-2 hover:bg-teal-100">

      <td className="text-teal-900 p-2 text-lg">{ name }</td>
      <td className="text-teal-900 p-2">{ company }</td>
      <td className="text-teal-900 p-2">{ email }</td>

      <td className="text-teal-900 p-2">
      <button
          type="button" 
          className="bg-emerald-900 py-2 px-3 font-medium text-teal-50 rounded-md hover:bg-emerald-300 hover:text-teal-900 w-full block"
          onClick={() => navigate(`/clients/${id}`, { replace: true })}
        >
          View
        </button>  

        <button
          type="button" 
          className="bg-cyan-600 py-2 px-3 font-medium text-teal-50 rounded-md hover:bg-cyan-300 hover:text-teal-900 w-full block mt-2"
        >
          Edit
        </button>  

        <button
          type="button" 
          className="bg-red-600 py-2 px-3 font-medium text-teal-50 rounded-md hover:bg-red-500 hover:text-teal-900 w-full block text-sm mt-2"
        >
          Delete
        </button> 
      </td>

    </tr>
  )
}