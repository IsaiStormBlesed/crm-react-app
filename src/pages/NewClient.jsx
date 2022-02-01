import { Form } from "../components/Form"

export const NewClient = () => {
  return (
    <div className="md:w-3/4 mx-auto">
      <h1 className="text-5xl font-black text-teal-900 tracking-wide">
        New Client
      </h1>
      <p className="text-base mt-4 text-teal-700 tracking-widest">
        Here you can add a new client
      </p>

      <Form />
    </div>
  ) 
}