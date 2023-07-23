import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Author from './Author'

import axios from 'axios'

const Dashboard = () => {

    const [authors, setAuthors] = useState([])


    const getAuthor = () =>{
        axios.get(`http://localhost:8000/api/author`)
            .then(res => setAuthors(res.data))
            .catch(err =>console.log(err) )

    }

    useEffect(getAuthor, [])

    return (
        <div >

            <Link to="/new">Add an author</Link>
            <p>We have quotes by: </p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                {authors.map((author, key) =>{
                return <Author key={key} getAuthor={getAuthor} auth={author}/>
            })}
            </table>
            


        </div>
    )
}

export default Dashboard