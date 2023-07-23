import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'


const Edit = () => {

    const {id} = useParams()

    const navigator = useNavigate()

    const [nameErr, setNameErr] = useState('')

    const [authorData, setAuthorData] = useState({
        name: '',
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setAuthorData(current=>({...current, [name]: value}))
    }

    const handleCancel = (e) =>{
        setAuthorData({
            name: '',
        })
        navigator('/')
    }

    const getAuthor = () =>{
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => setAuthorData(res.data))
            .catch(err =>console.log(err) )
                
    }
    useEffect(getAuthor, [])


    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/author/${id}`, authorData)
            .then(res => navigator('/'))
            .catch(err => {
                const errs = err.response.data.errors

                if (errs.name) {
                    setNameErr(errs.name.message)
                } else {
                    setNameErr('')
                }
            })
    }

    


    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                <p>Edit the author: </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                </div>
                <div>
                    <p className='err'>{nameErr}</p>
                    <input onChange={handleChange} value={authorData.name} name='name'></input>
                </div>
                <div>
                    <button onClick={handleCancel}>Cancel</button>
                    <button>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Edit