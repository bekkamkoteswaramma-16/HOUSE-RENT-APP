import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
      <h1>404 - Page Not Found</h1>
      <button onClick={() => navigate('/')}>Return to Home</button>
    </div>
  )
}