import { NavLink } from "react-router-dom"
import ROUTES from "../../routes"

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to={ROUTES.CONTACTS}
        className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Contacts
      </NavLink>
      <NavLink
        to={ROUTES.APPOINTMENTS}
        className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Appointments
      </NavLink>
    </nav>
  )
}

export default Navigation