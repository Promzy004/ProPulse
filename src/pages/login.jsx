import './css/login.css'
import { Link } from 'react-router-dom';


export function LoginPage() {
    return(
        <>
            <div className="loginsignup">
                <div className="loginsignup-container container-login">
                    <h1>Log In</h1>
                    <div className="loginsignup-field">
                        <input type="text" name="" id="" placeholder="Enter Username or Email" required/>
                        {/* <input type="email" placeholder="Email Address" /> */}
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Continue</button>
                    <p className="loginsignup-login">Don't have an account? <Link to='/signUp'>SignUp here</Link></p>
                    <div className="loginsignup-agree">
                        <label htmlFor="agree">
                            <input type="checkbox" name="" id="agree" />
                            By continuing, i agree to the terms of use & privacy policy.
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

function LoginSignUp() {
    return(
        <>
        <form action="">

            <div className="loginsignup">
                <div className="loginsignup-container">
                    <h1>Sign Up</h1>
                    <div className="loginsignup-field">
                        <input type="text" name="" id="" placeholder="Enter Username" required/>
                        <input type="email" placeholder="Enter Email Address" required />
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <Link to='/'>
                        <button type='submit'>
                            Continue
                        </button>
                    </Link>
                    <p className="loginsignup-login">Already have an account? <Link to='/login'>Login here</Link></p>
                    <div className="loginsignup-agree">
                        <label htmlFor="agree">
                            <input type="checkbox" name="" id="agree" />
                            By continuing, i agree to the terms of use & privacy policy.
                        </label>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}


export default LoginSignUp;

