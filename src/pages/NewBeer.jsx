import axios from 'axios'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
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
        <div className="App">
            <Form className="mb-6" >

                <Form.Group controlId="">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleNameChange} value={name} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label htmlFor="tagline">Tagline</Form.Label>
                    <Form.Control type="text" name="tagline" onChange={handleTaglineChange} value={tagline} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control as="textarea" rows={3} type="text" name="description" onChange={handleDescriptionChange} value={description} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label htmlFor="first_brewed">First Brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" onChange={handleFirstBrewedChange} value={first_brewed} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label htmlFor="brewers_tips">Tips</Form.Label>
                    <Form.Control type="text" name="brewers_tips" onChange={handleBrewersTipshange} value={brewers_tips} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label htmlFor="attenuation_level">Attenuation</Form.Label>
                    <Form.Control type="number" name="attenuation_level" onChange={handleAttenuationLevelChange} value={attenuation_level} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label htmlFor="contributed_by">Created by</Form.Label>
                    <Form.Control type="text" name="contributed_by" onChange={handleContributedByChange} value={contributed_by} />
                    <br />
                </Form.Group>

                <Button onClick={handleSubmitForm}>Agregar</Button>


            </Form>
        </div>
    )
}

export default NewBeer
