import React,{useState} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'; 
import TwitterIcon from '@material-ui/icons/Twitter';  
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import {Link} from 'react-router-dom'

export default function Login(props) {


    const [login ,setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    

    const signInHandler = (e) =>{
        e.preventDefault()

        if(email === '' || password === '' ){
            alert(' field is empty')
        }else{

            setLogin(!login);
           
        }
    }

    return (
        <div className="login">
            <div className="containerz">

            <h2>Sign In</h2>
            <p>New user ? <span>Create an accout</span></p>
            <form onSubmit={signInHandler}>
                <input  onChange={emailHandler} type="email" placeholder="Username or email"/>
                <input onChange={passwordHandler} type="password" placeholder="Password"/>

               <div className="checkbox_container">
               <input className="checkbox" type="checkbox" />
               <label htmlFor="">Keep me signed in</label>
               </div>

                <button>
                    <Link to="/home">
                     Sign In

                    </Link> 
                     </button>

                <div className="login_with">
                    <div className="one"></div>
                        <p>or Sign in With</p>
                    <div className="one"></div>
                </div>
            
                <div>
                <FacebookIcon/>  <TwitterIcon/>  <LinkedInIcon/>
                </div>
                
            </form>

            </div>
        </div>
    )
}
