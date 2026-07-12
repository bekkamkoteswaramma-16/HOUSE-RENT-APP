import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom' // ✅ useNavigate

export default function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const savedUser = JSON.parse(localStorage.getItem('currentUser'))
    if(savedUser){
      navigate('/dashboard') // ✅ Programmatic navigation
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={e=>setEmail(e.target.value)} />
        <button>Login</button>
      </form>
      <Link to="/register">Register</Link> {/* ✅ Link */}
    </div>
  )
}