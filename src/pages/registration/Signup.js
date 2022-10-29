import React from 'react'
import { exceptionHandler, sharedSetUser, toast } from '../../utils';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { IS_DEV } from '../../configs';
const DEV_EMAIL = 'mudassir.stack147@gmail.com';

const SignUpForm = ({signupRef}) => {
    const userPayload = React.useRef({ email: IS_DEV ? DEV_EMAIL : '', password: IS_DEV ? 'test123' : '', confirmPassword: IS_DEV ? 'test123' : '' });

    const onChange = (e) => {
        e.preventDefault();
        userPayload.current = {
            ...userPayload.current,
            [e.target.id]: e.target.value
        }
    }
    const onSignup = async (event) => {
        try {
            event.preventDefault()
            const user = userPayload.current;
            console.log(user);
            if (user.password !== user.confirmPassword) return toast.info('Passwords do not match!');
            const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
            console.log('[onSignup].res', res);
            toast.info('You are registered successfully!');
            sharedSetUser(res.user);
            // await sendSignInLinkToEmail(auth, user.email, { url: 'https://locally-c0c85.web.app/app/dashboard', handleCodeInApp: true });
            // window.localStorage.setItem('emailForSignIn', user.email);
            // toast.info('A verification link has been sent to your email!')
        } catch (error) {
            exceptionHandler(error)
        }

    }
    return (
        <>
         <form action="#" className="form-sign form-content" ref={signupRef} id="signup">
                <div className="field-input">
                    <input type="email" placeholder="Email" defaultValue={userPayload.current.email} onChange={onChange} id="email" name="email" required/>
                </div>
                <div className="field-input">
                    <input type="password" placeholder="Password" defaultValue={userPayload.current.password} name="password" required onChange={onChange} />
                </div>
                <div className="field-input">
                    <input type="password" placeholder="Confirm Password" name="loginPassword2" defaultValue={userPayload.current.confirmPassword} required onChange={onChange} />
                </div>
                <div className="field-check">
                    <label htmlFor="accept">
                        Accept the <a title="Terms" href="#">Terms</a> and <a title="Privacy Policy" href="#">Privacy Policy</a>
                        <span className="checkmark">
                            <i className="la la-check" />
                        </span>
                    </label>
                </div>
                <input type="submit" name="submit" defaultValue="Sign Up" onClick={onSignup}/>
            </form>

        </>

    )
}
export default SignUpForm;
