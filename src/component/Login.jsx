import React, {useState} from "react";

const Login = () => {
    const [ userName, setUserName ] = useState('')
    const [ passWord, setPassWord ] = useState('')

    const handleUserName = (e) => setUserName(e.target.value)
    const handlePassWord = (e) => setPassWord(e.target.value)
    const handleClick = () => { console.log('hereeee')}
    return <div className="container">
        <div className="row">
        <p>Login page is here</p>
        <div className="three columns">
            <label htmlFor='nameInput'>User Name</label>
            <input type='text' id='nameInput' className="u-full-width" value={userName} placeholder='user name' onChange={handleUserName}/>
            
            <label htmlFor='passwordInput'>Password</label>
            <input type='password' id='passwordInput' className="u-full-width" value={passWord} placeholder='password'onChange={handlePassWord}/>

            <button onClick={handleClick}>Submit</button>
        </div>
        </div>
        </div>
}

export default Login;