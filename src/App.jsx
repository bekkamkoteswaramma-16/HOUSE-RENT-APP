import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About' // ✅ ee file ippudu undi
import Login from './pages/Login'
import Register from './pages/Register' // ✅ spelling check
import TenantHome from './pages/TenantHome'
import Details from './pages/Details'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="tenant-home" element={<TenantHome />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> {/* ✅ 404 */}
      </Route>
    </Routes>
  )
}
export default App