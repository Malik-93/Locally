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
            {/* <button onClick={() => window.open(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://locally-chat-e829d.web.app/', '_blank').focus()}>Chat</button> */}
        </div>
    )
}
