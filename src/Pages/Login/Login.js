import { useState } from 'react'
import '../Signup/Signup.css'
import { useLogin } from '../../Hooks/useLogin';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {login,error }=useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(email,password)
        await login(email,password)
        setEmail("")
        setPassword("")
    }
   
    return (
        <div className='main-form'>
            <form onSubmit={handleSubmit}>
                <h1> Login</h1>
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

export default Login;