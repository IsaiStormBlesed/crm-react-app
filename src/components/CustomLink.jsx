import { Link, useMatch, useResolvedPath } from "react-router-dom"

export const CustomLink = ({ children, to, ...props }) => {

  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link
      className={`${ match ? 'text-teal-500' : 'text-teal-50' } transition-all ease-in-out delay-150 text-2xl block hover:text-teal-500 hover:scale-95 mt-5`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}