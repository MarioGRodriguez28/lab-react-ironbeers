import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div>
        <img src={'../assets/beers.png'} alt="Beers" />
        <Link to="/beers">
          <h1>List Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </p>
        </Link>
      </div>
      <div>
        <Link to="/random-beer">
          <img src="../assets/random-beer.png" alt="Random Beers" />
          <h1>Random Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </p>
        </Link>
      </div>
      <div>
        <Link to="/new-beer">
          <img src="../assets/new-beer.png" alt="New Beers" />
          <h1>New Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Home
