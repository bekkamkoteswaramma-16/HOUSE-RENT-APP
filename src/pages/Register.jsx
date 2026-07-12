import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('Tenant')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { name, email, password, role }
    localStorage.setItem('currentUser', JSON.stringify(user))
    alert('Registered Successfully!')
    navigate('/login')
  }

  return (
    <div style={{padding: '50px', maxWidth: '400px', margin: 'auto'}}>
      <h1 style={{textAlign: 'center', color: 'blue'}}>Register</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={(e)=>setName(e.target.value)}
          style={{padding: '10px', margin: '10px 0', width: '100%'}}
          required
        />
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          style={{padding: '10px', margin: '10px 0', width: '100%'}}
          required
        />
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          style={{padding: '10px', margin: '10px 0', width: '100%'}}
          required
        />
        <select 
          value={role} 
          onChange={(e)=>setRole(e.target.value)}
          style={{padding: '10px', margin: '10px 0', width: '100%'}}
        >
          <option value="Tenant">Tenant</option>
          <option value="Owner">Owner</option>
        </select>
        <br/>
        <button type="submit" style={{padding: '10px 20px', background: 'blue', color: 'white', width: '100%', border: 'none', borderRadius: '5px'}}>
          Register
        </button>
      </form>
    </div>
  )
}