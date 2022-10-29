import React from 'react'
import { auth, FacebookAuthProvider, GoogleAuthProvider } from '../firebase';
import { exceptionHandler, sharedSetUser } from '../utils';
export default () => {
    const loginWithGoogle = () => {
        auth
            .signInWithPopup(GoogleAuthProvider)
            .then((res) => {
                console.log("Success", res);
                sharedSetUser(res.user)
            })
            .catch((err) => {
                exceptionHandler(err)
            });
    };
    const loginWithFacebook = () => {
        auth
            .signInWithPopup(FacebookAuthProvider)
            .then((res) => {
                console.log("Success", res);
                // sharedSetUser(res.user)
            })
            .catch((err) => {
                exceptionHandler(err)
            });
    };
    const loginWithTiktok = async () => {
        try {
            let url = 'https://www.tiktok.com/auth/authorize/';
            url += '?client_key=awcal9yxl153qjvm';
            url += '&scope=user.info.basic,video.list';
            url += '&response_type=code';
            url += '&redirect_uri=https://locally-c0c85.firebaseapp.com';
            url += '&state=' + `${Math.random().toString(36).substring(2)}`;
            window.location.href = url;
        } catch (error) {
            exceptionHandler(error)
        }

    }
    return (
        <>
            <p className="choose-more">
                Continue with 
                <a title="Facebook" className="fb" onClick={loginWithFacebook} href="#"> Facebook </a> 
                or 
                <a title="Google" className="gg" href="#" onClick={loginWithGoogle}> Google</a>
                {/* <a title="Tiktok" className="gg" href="#" onClick={loginWithTiktok}>Tiktok</a> */}
            </p>
        </>

    )
}
