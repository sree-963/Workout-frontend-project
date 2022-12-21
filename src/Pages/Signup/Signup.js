import { useState } from 'react'
import './Signup.css'
import { useSignup } from '../../Hooks/useSingup';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { signup, error } = useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='main-form'>
            <form onSubmit={handleSubmit} >
                <h1>Signup</h1>
                <div className='field'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder='Enter email'
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='field'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder='Enter password'
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>

                <button>Submit</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Signup;