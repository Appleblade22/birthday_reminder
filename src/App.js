import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
    const response = await fetch(url)
    const data = await response.json()
    setTours(data)
    setIsLoading(false)
  } catch(err){
  console.log(err)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  if(tours.length === 0) {
    return (
      <main>
       <div className='title'>
          <h2>No tours left</h2> 
          <div className='underline'></div>
          <button className="btn" onClick={fetchData}>Refresh</button>

        </div>
      </main>
    )
  }
  return (
    <div className="app">
      
      {isLoading ? <Loading /> : <Tours tours={tours} removeTour = {removeTour} />}
      </div>
  )
}

export default App
