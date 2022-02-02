import { useEffect, useState } from "react"
import { Client } from "../components/Client";

export const Home = () => {

  const [clients, setClients] = useState([])

  useEffect(() => {
    console.info('Form useEffect in home.jsx');
    const getClienstFromAPI = async () => {
      const url = 'http://localhost:4000/clients'
      const response = await fetch(url)
      const data = await response.json()

      setClients(data)
    }

    getClienstFromAPI()

  }, [])

  return (
    <div className="md:w-3/4 mx-auto">
      <h1 className="text-5xl font-black text-teal-900 tracking-wide">
        Clients
      </h1>
      <p className="text-base mt-4 text-teal-700 tracking-widest">
        Here you can add a look all your clients
      </p>

      <table className="w-full table-auto mt-10 bg-teal-50 shadow">
        <thead className="bg-teal-900 text-teal-50"> 
          <tr>
            <th className="py-2 tracking-wider">Name</th>
            <th className="py-2 tracking-wider">Company</th>
            <th className="py-2 tracking-wider">Contact</th>
            <th className="py-2 tracking-wider">Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            clients.map((client) => (
              <Client 
                key={client.id}
                client={client}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}