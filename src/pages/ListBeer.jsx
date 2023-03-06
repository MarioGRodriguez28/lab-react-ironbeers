import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
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
    <div className="App">
      {allBeers.map((eachBeer) => {
        //  {/* console.log("Estoy extrayendo esto de eachBeer", eachBeer) */}

        return (
          <Card style={{ width: '20%', margin: '10px' }}>
            <Card.Img style={{ padding: '100px' }} variant="top" src={eachBeer.image_url} alt="List Beers" />
            <Card.Body>
              <Card.Title><h2>{eachBeer.name}</h2></Card.Title>
              <Card.Text>
                {eachBeer.tagline}
              </Card.Text>
              <Card.Text>
                <p>{eachBeer.contributed_by} </p>
              </Card.Text>
              <Link
                to={`/beers/${eachBeer._id}`}
                key={eachBeer._id}
                value={eachBeer.name}
              >
                <Button variant="primary">More about {eachBeer.name}</Button>
              </Link>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default ListBeer
