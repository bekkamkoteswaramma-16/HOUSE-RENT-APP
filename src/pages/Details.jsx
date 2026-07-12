import { useParams, useNavigate } from 'react-router-dom' // ✅ useParams
import { houses } from '../data/dummyData'

export default function Details() {
  const { id } = useParams() // ✅ Get URL param
  const navigate = useNavigate()
  const house = houses.find(h => h.id == id)

  return (
    <div>
      <h1>House Details: {house?.title}</h1>
      <button onClick={() => navigate(-1)}>Back</button> {/* ✅ Back button */}
    </div>
  )
}