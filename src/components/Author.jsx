import React, { useState, useParams } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Author = props => {


    const { auth, getAuthor } = props

    const navigator = useNavigate()


    const handleDelete = (e) => {
        // alert(`${auth._id}`)
        axios.delete(`http://localhost:8000/api/author/${auth._id}`)
            .then(res =>getAuthor())
            .catch(err => console.error(err));
    }
    return (

        <tbody>
            <tr>
                <td>
                    <p>{auth.name}</p>
                </td>
                <td>
                    <button onClick={() => { navigator(`/update/${auth._id}`) }}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </td>
            </tr>
        </tbody>

    )
}

export default Author