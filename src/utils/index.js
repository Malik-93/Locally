import { set_current_user } from '../redux/reducer-slices/user.slice';
import { appStore } from "../redux/store";
import { auth } from '../firebase';


export const sharedSetUser = (user = {}) => {
    if (Object.keys(user).length) {
        appStore.dispatch(set_current_user({
            uId: user.uid,
            accessToken: user.accessToken,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        }))
    } else {
        appStore.dispatch(set_current_user({}))
    }
}

export const toast = {
    info: (msg) => {
        alert(msg)
    }
}
export const sharedSignout = async () => {
    try {
        const res = await auth.signOut();
        console.log('[sharedSignout].res', res);
        sharedSetUser({});
    } catch (error) {
        exceptionHandler(error)

    }
}
export const exceptionHandler = (exeption) => {
    console.log('exeption', exeption);
    console.log('StringifyException', JSON.stringify(exeption));
    toast.info(JSON.stringify(exeption))
}