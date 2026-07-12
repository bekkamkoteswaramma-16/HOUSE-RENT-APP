import { Outlet, NavLink } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <NavLink to="/dashboard">Overview</NavLink> | 
        <NavLink to="/dashboard/profile">Profile</NavLink> | 
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  )
}