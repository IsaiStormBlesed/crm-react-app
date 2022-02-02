import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { InfoClient } from "../components/InfoClient";



export const ClientScreen = () => {

  const [client, setClient] = useState({});

  const { id } = useParams()

  useEffect(() => {
    console.log('from useEffect clientScreen.jsx');
    const getClientByID = async () => {
      const url = `http://localhost:4000/clients/${id}`
      const response = await fetch(url)
      const data = await response.json()
      setClient(data)
    }
    
    getClientByID()

  }, []);
  
  const { name, email, company, telephone, notes } = client

  return (

    <div className="md:w-3/4 mx-auto">
      <h1 className="text-5xl font-black text-teal-900 tracking-wide">
        Client: <span className="uppercase text-teal-700">{ name }</span>
      </h1>
      <p className="text-base mt-4 mb-10 text-teal-700 tracking-widest">
        More Info:
      </p>

      <InfoClient label='Email'>{ email }</InfoClient>
      <InfoClient label='Company'>{ company }</InfoClient>
      <InfoClient label='Telephone'>{ telephone }</InfoClient>
      <InfoClient label='Notes'>{ notes }</InfoClient>
    </div>
  )
}