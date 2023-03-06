import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function SingleBeer() {
  const navigate = useNavigate()
  const paramsId = useParams()
  const { id } = paramsId

  const [allBeers, setAllBeers] = useState(null)
  const [isFetch, setFetch] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`,
      )
      setAllBeers(response.data)
      setFetch(false)
    } catch (error) {
      navigate('/error')
    }
  }

  if (isFetch === true) {
    return <h3>...Espera mi pana estamos trabajando</h3>
  }

  return (
    <div className="App">

      <Card style={{ width: '50%', margin: '100px' }}>
        {/* <Card.Img
            style={{ padding: '100px' }}
            variant="top"
            src={allBeers.image_url}
            alt="List Beers"
          /> */}
        <Card.Body>
          <Card.Title>
            <h1>{allBeers.name} </h1>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <p>{allBeers.tagline} </p>
          </Card.Subtitle>
          <Card.Text className="blockquote-footer">
            <p>Created by: {allBeers.contributed_by} </p>
            <Card.Text>
              <p>{allBeers.first_brewed} </p>
            </Card.Text>
            <p>{allBeers.attenuation_level} </p>
            <p>{allBeers.description} </p>

          </Card.Text>
          <Link to={`/beers`} key={allBeers._id} value={allBeers.name} >
            <Button variant="primary">Return to the List</Button>
          </Link>
        </Card.Body>
      </Card>



    </div>
  )
}

export default SingleBeer
