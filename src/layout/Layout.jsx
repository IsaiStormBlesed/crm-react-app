import { Link, Outlet } from "react-router-dom"
import { CustomLink } from "../components/CustomLink"

export const Layout = () => {

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:basis-1/4 bg-teal-900 py-10 px-5">
        <h2 className="text-center text-teal-100 text-4xl font-black tracking-wide">
          CRM - Clients
        </h2>

        <nav className="mt-10">
          <CustomLink 
            to='/clients'
          >
            Client
          </CustomLink>

          <CustomLink
            to='/clients/new'
          >
            New Client
          </CustomLink>
        </nav>
      </div>

      <div className="md:basis-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  )
}