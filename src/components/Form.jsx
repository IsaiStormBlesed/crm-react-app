import * as yup from 'yup'
import { Formik, Field  } from "formik"
import { useNavigate } from 'react-router-dom'


export const Form = () => {

  const navigate = useNavigate()

  const newClientSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    company: yup.string().max(20).required(),
    telephone: yup.number().positive().integer().typeError('Tel. not valid, it must be a number'),
    notes: yup.string()
  })

  const handleSubmit = async (values) => {

    const url = 'http://localhost:4000/clients'

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
 
    const data = await response.json()

    navigate('/clients')
  }

  return (
    <div className="bg-white py-10 px-5 mt-10 rounded-md shadow-md">
      <Formik
        initialValues={{
          name: '',
          email: '',
          company: '',
          telephone: '',
          notes: ''
        }}
        onSubmit={async (values, actions) => {
          await handleSubmit(values)
          actions.resetForm()
        }}
        validationSchema={newClientSchema}
      >

        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name" 
                className="inline-block py-1 px-2 uppercase rounded-md text-teal-900 text-base font-semibold">
                Name:
              </label>
              <Field
                id="name" 
                type='text'
                className="rounded block w-full mt-3 p-3 bg-teal-50 ring-2 ring-teal-600"
                name="name"
              />
              {
                errors.name && touched.name 
                ? 
                <small className='text-red-600 uppercase text-base'>{errors.name}</small>
                :
                null
              }
            </div>

            <div className="mb-5">
              <label
                htmlFor="company" 
                className="inline-block py-1 px-2 uppercase rounded-md text-teal-900 text-base font-semibold">
                Company:
              </label>
              <Field
                id="company" 
                type='text'
                className="rounded-md ring-2 ring-teal-600 block w-full mt-3 p-3 bg-teal-50"
                name='company'
              />

              {
                errors.company && touched.company 
                ? 
                <small className='text-red-600 uppercase text-base'>{errors.company}</small>
                :
                null
              }           
            </div>

            <div className="mb-5">
              <label
                htmlFor="email" 
                className="inline-block py-1 px-2 uppercase rounded-md text-teal-900 text-base font-semibold">
                Email:
              </label>
              <Field
                id="email" 
                type='email'
                placeholder="email@email.com"
                className="rounded-md ring-2 ring-teal-600 block w-full mt-3 p-3 bg-teal-50"
                name='email'
              />

              {
                errors.email && touched.email 
                ? 
                <small className='text-red-600 uppercase text-base'>{errors.email}</small>
                :
                null
              }           
            </div>

            <div className="mb-5">
              <label
                htmlFor="telephone" 
                className="inline-block py-1 px-2 uppercase rounded-md text-teal-900 text-base font-semibold">
                Telephone:
              </label>
              <Field
                id="telephone" 
                type='tel'
                className="rounded-md ring-2 ring-teal-600 block w-full mt-3 p-3 bg-teal-50"
                name='telephone'
              />

              {
                errors.telephone && touched.telephone 
                ? 
                <small className='text-red-600 uppercase text-base'>{errors.telephone}</small>
                :
                null
              }           
            </div>

            <div className="mb-5">
              <label
                htmlFor="notes" 
                className="inline-block py-1 px-2 uppercase rounded-md text-teal-900 text-base font-semibold">
                Notes:
              </label>
              <Field
                as="textarea"
                id="notes" 
                type='text'
                className="h-40 rounded-md ring-2 ring-teal-600 block w-full mt-3 p-3 bg-teal-50"
                name='notes'
              />           
            </div>

            <input 
              className="mt-5 w-full bg-teal-900 text-2xl tracking-wider font-semibold py-5 text-teal-50 rounded-md hover:bg-teal-700 transition-colors ease-in delay-100 cursor-pointer"
              type="submit" 
              value="Add Client"
            />
          </form>
        )}

      </Formik>
    </div>
  )
}