import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import '../styles/form.css'

const Form = ({ route, method }) => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const submitForm = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const res = await api.post(route, { username, password });
            if (method === 'login') {
                localStorage.setItem('access', res.data.access)
                localStorage.setItem('refresh', res.data.refresh)
                navigate('/')
            } else {
                navigate('/login')
            }
        } catch (error) {
            console.error(error);
            alert(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        isLoading ? <h1>Loading...</h1> : <>
            <form onSubmit={submitForm} className='form-container'>
                <h1>{method === 'login' ? 'Login' : 'Register'}</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password || ''}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="form-button">{method === 'login' ? 'Login' : 'Register'}</button>
            </form>
        </>
    )
}

export default Form

