import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <h1>From Layout.jsx</h1>
      <Outlet />
    </div>
  )
}