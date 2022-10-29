import React from 'react'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { IS_DEV } from '../../configs';
import { sharedSetUser, toast } from '../../utils';
import { auth } from '../../firebase';
const DEV_EMAIL = 'mudassir.stack147@gmail.com';


const LoginForm = ({loginRef}) => {
    const userPayload = React.useRef({ email: IS_DEV ? DEV_EMAIL : '', password: IS_DEV ? 'test123' : '' });
    const navigate = useNavigate();
    const onChange = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        userPayload.current = {
            ...userPayload.current,
            [e.target.id]: e.target.value
        }
    }
    const onLogin = async (event) => {
        event.preventDefault()
        const res = await signInWithEmailAndPassword(auth, userPayload.current.email, userPayload.current.password);
        toast.info('Login successfully!');
        console.log('[onLogin].res', res);
        sharedSetUser(res.user);

    }
    return (
        <>
            <form  action="#" className="form-log form-content" ref={loginRef} id="login">
                <div className="field-input">
                    <input type="email" placeholder="Email" name="loginUsername"  defaultValue={userPayload.current.email} onChange={onChange} required/>
                </div>
                <div className="field-input">
                    <input type="password" placeholder="Password" name="loginPassword" defaultValue={userPayload.current.password}  onChange={onChange} required/>
                </div>
                <a title="Forgot password" className="forgot_pass" href="#">Forgot password</a>
                <input type="submit" name="submit" onClick={onLogin} defaultValue="Login" />
            </form>
        </>

    )
}
export default LoginForm;
