import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NewBeer() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setBrewersTips] = useState('')
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState('')

    //Handle

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleTaglineChange = (event) => {
        setTagline(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleFirstBrewedChange = (event) => {
        setFirstBrewed(event.target.value)
    }

    const handleBrewersTipshange = (event) => {
        setBrewersTips(event.target.value)
    }
    const handleAttenuationLevelChange = (event) => {
        setAttenuationLevel(event.target.value)
    }

    const handleContributedByChange = (event) => {
        setContributedBy(event.target.value)
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by,
        }
        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            navigate('/beers')
        } catch (error) {
            navigate('/error')
        }
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <form>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleNameChange} value={name} />
                <br />
                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" onChange={handleTaglineChange} value={tagline} />
                <br />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" onChange={handleDescriptionChange} value={description} />
                <br />
                <label htmlFor="first_brewed">First Brewed</label>
                <input type="text" name="first_brewed" onChange={handleFirstBrewedChange} value={first_brewed} />
                <br />
                <label htmlFor="brewers_tips">Tips</label>
                <input type="text" name="brewers_tips" onChange={handleBrewersTipshange} value={brewers_tips} />
                <br />
                <label htmlFor="attenuation_level">Attenuation</label>
                <input type="number" name="attenuation_level" onChange={handleAttenuationLevelChange} value={attenuation_level} />
                <br />
                <label htmlFor="contributed_by">Created by</label>
                <input type="text" name="contributed_by" onChange={handleContributedByChange} value={contributed_by} />
                <br />


                <button  onClick={handleSubmitForm}>Agregar</button>

            </form>

        </div>
    )
}

export default NewBeer
