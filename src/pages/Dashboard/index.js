import React from 'react'
import { sharedSignout } from '../../utils'
export default () => {
    console.log("Dashbaord")
    return (
        <div>
            <div>
                Dashbaord
            </div>
            <button onClick={sharedSignout}>Logout</button>
        </div>
    )
}
