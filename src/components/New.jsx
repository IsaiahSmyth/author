import React, { useState, useParams, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const New = () => {

    // const {id} = useParams()

    const navigator = useNavigate()

    const [nameErr, setNameErr] = useState('')

    const [authorData, setAuthorData] = useState({
        name: '',
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setAuthorData(current => ({ ...current, [name]: value }))
    }

    const handleCancel = (e) => {
        setAuthorData({
            name: '',
        })
        navigator('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/author", authorData)
            .then(res => navigator('/'))
            .catch(err => 
                    { console.log(err)
                    const errs = err.response.data.errors

                    if (errs.name) {
                        setNameErr(errs.name.message)
                    } else {
                        setNameErr('')
                    }
                }
            )
    }

    // const getAuthor = () =>{
    //     axios.get(`http://localhost:8000/api/author/${id}`)
    //         .then(res => setAuthorData(res.data))
    //         .catch(err =>console.log(err) )

    // }

    // useEffect(getAuthor, [])


    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                <p>Add a new author: </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                </div>
                <div>
                    <p className='err'>{nameErr}</p>
                    <input onChange={handleChange} value={authorData.name} name='name'></input>
                </div>

                <button onClick={handleCancel}>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default New