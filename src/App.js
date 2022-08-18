import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { auth, db } from './firebase';
import { sharedSetUser } from './utils';
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    // // Confirm the link is a sign-in with email link.
    // const auth = getAuth();
    // if (isSignInWithEmailLink(auth, window.location.href)) {
    //     // Additional state parameters can also be passed via URL.
    //     // This can be used to continue the user's intended action before triggering
    //     // the sign-in operation.
    //     // Get the email if available. This should be available if the user completes
    //     // the flow on the same device where they started it.
    //     let email = window.localStorage.getItem('emailForSignIn');
    //     if (!email) {
    //         // User opened the link on a different device. To prevent session fixation
    //         // attacks, ask the user to provide the associated email again. For example:
    //         email = window.prompt('Please provide your email for confirmation');
    //     }
    //     // The client SDK will parse the code from the link for you.
    //     signInWithEmailLink(auth, email, window.location.href)
    //         .then((result) => {
    //             // Clear email from storage.
    //             window.localStorage.removeItem('emailForSignIn');
    //             // You can access the new user via result.user
    //             // Additional user info profile not available via:
    //             // result.additionalUserInfo.profile == null
    //             // You can check if the user is new or existing:
    //             // result.additionalUserInfo.isNewUser
    //         })
    //         .catch((error) => {
    //             // Some error occurred, you can inspect the code: error.code
    //             // Common errors could be invalid email and invalid or expired OTPs.
    //         });
    // }
    auth.onAuthStateChanged((_user) => {
      console.log('[Landing][onAuthStateChanged]._user', _user);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;