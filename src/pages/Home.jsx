import React from 'react'
import { NavLink } from 'react-router-dom'
import beer from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Home() {
  return (
    <div className="App">
      <Card style={{ width: '60%' }} className="shadow p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={beer} alt="Beers" />
        <Card.Body>
          <Card.Title>List Beers</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </Card.Text>
          <NavLink to="/beers">
            <Button variant="primary" >Our Beers</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card style={{ width: '60%' }} className="shadow p-3 mb-5 bg-white rounded">
        <Card.Img src={randomBeer} alt="Random Beers" />
        <Card.Body>
          <Card.Title>Random Beers</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </Card.Text>
          <NavLink to="/new-beer">
            <Button variant="primary">Random Beer</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card style={{ width: '60%' }} className="shadow p-3 mb-5 bg-white rounded">
        <Card.Img src={newBeer} alt="New Beers" />
        <Card.Body>
          <Card.Title>New Beer</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </Card.Text>
          <NavLink to="/new-beer">
            <Button variant="primary">New Beer</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home
