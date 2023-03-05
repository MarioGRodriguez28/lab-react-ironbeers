import React from 'react'
import { NavLink } from 'react-router-dom'
import beer from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div>
      <div>
        <img src={beer} alt="Beers" />
        <NavLink to="/beers">
          <h1>List Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/random">
          <img src={randomBeer} alt="Random Beers" />
          <h1>Random Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/new-beer">
          <img src={newBeer} alt="New Beers" />
          <h1>New Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempor interdum risus non venenatis. Donec convallis purus risus,
            eget rhoncus sapien hendrerit quis. Maecenas sem dolor, finibus vel
            iaculis non, tempus laoreet lacus. Donec sed dui venenatis, tempus
            massa ut, vestibulum sem. Integer eget sem laoreet, aliquet velit
            in, maximus orci.
          </p>
        </NavLink>
      </div>
    </div>
  )
}

export default Home
