import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListBeer() {
  const [allBeers, setAllBeers] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers',
      )
      // console.log("Estoy extrayendo esto de heroku", response)
      setAllBeers(response.data)
    } catch (error) {
      return '/error'
    }
  }

  return (
    <div>
      <Link to="/">Home</Link>

      {allBeers.map((eachBeer) => {
        //  {/* console.log("Estoy extrayendo esto de eachBeer", eachBeer) */}

        return (
          <Link to={`/beers/${eachBeer._id}`}  key={eachBeer._id} value={eachBeer.name} >
            <div>
              <img src={eachBeer.image_url} alt="List Beers" width={75} />
              <h1>{eachBeer.name}</h1>
              <h2>{eachBeer.tagline} </h2>
              <p>{eachBeer.contributed_by} </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ListBeer
