import React from 'react'
import { sharedSignout } from '../../utils'
import Home from '../Home/Home'

export default ({isLogin}) => {
    console.log("Dashbaord")
    return (
        <>
            <Home isLogin={isLogin}/>
            <div>
                <button onClick={sharedSignout}>Logout</button>
            </div>
        </>
    )
}
