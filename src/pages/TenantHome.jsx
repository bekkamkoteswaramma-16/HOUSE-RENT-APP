import { useEffect, useState } from 'react'
import { houses } from '../data/dummyData'
import { useNavigate } from 'react-router-dom'

export default function TenantHome() {
  const [user, setUser] = useState(null)
  const [filter, setFilter] = useState('All')
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if(!currentUser || currentUser.role !== 'Tenant'){
      navigate('/login')
    }
    setUser(currentUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    navigate('/login')
  }

  const filteredHouses = filter === 'All' ? houses : houses.filter(h => h.location === filter)
  const locations = ['All', ...new Set(houses.map(h => h.location))]

  return (
    <div style={{padding: '20px'}}>
      <div style={{background: 'green', color: 'white', padding: '15px', borderRadius: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h1>Tenant Dashboard</h1>
          <p>Welcome {user?.name}!</p>
        </div>
        <button onClick={handleLogout} style={{background: 'red', color: 'white', padding: '10px'}}>Logout</button>
      </div>

      <h2>Find Nearest Houses</h2>
      <div style={{marginBottom: '20px'}}>
        {locations.map(loc => (
          <button key={loc} onClick={() => setFilter(loc)} style={{margin: '5px', padding: '10px', background: filter===loc?'green':'gray', color: 'white', border: 'none', borderRadius: '20px'}}>
            {loc}
          </button>
        ))}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px'}}>
        {filteredHouses.map(h => (
          <div key={h.id} style={{background: 'white', borderRadius: '10px', padding: '10px', boxShadow: '0 2px 5px gray'}}>
            <img src={h.image} style={{width: '100%', height: '150px', objectFit: 'cover'}} />
            <h3 style={{color: 'green'}}>₹{h.rent}/month</h3>
            <p><b>{h.title}</b></p>
            <p>📍 {h.location}</p>
            <button style={{width: '100%', padding: '8px', background: 'green', color: 'white', border: 'none'}}>Contact Owner</button>
          </div>
        ))}
      </div>
    </div>
  )
}