import React from 'react'
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../hooks/store.hook';
import { sharedSetUser } from '../../utils';
import { useNavigate } from "react-router-dom";

export default () => {
    const reducer = useAppSelector(store => store.user_slice);
    const currentUser = reducer.user_slice
    const navigate = useNavigate();
    React.useEffect(() => {
        auth.onAuthStateChanged((_user) => {
            if (_user) {
                const user = { ..._user.multiFactor.user };
                sharedSetUser(user);
                navigate('/app/dashboard');
                db.collection("users")
                    .doc(user.uid)
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            console.log("user exits");
                        } else {
                            const details = {
                                name: user.displayName,
                                displayName: user.displayName.split(" ")[0],
                                photoURL: user.photoURL,
                                email: user.email,
                                uid: user.uid,
                            };
                            db.collection("users")
                                .doc(user.uid)
                                .set(details)
                                .then((res) => {
                                    console.log("new user created", res);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                sharedSetUser({});
                navigate('/user/login');
            }
        });
    }, []);
    console.log('[Landing.js] LoggedIn User', currentUser);
    return (
        <div>Loading...</div>
    )
}
