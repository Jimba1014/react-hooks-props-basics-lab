import React from "react"
import user from "../data/user"

function Links(user) {
    return (
        <div>
            <h3>Links</h3>
            <a href={user.github}>{user.github}</a>
            <a href={user.linkedin}>{user.linkedin}</a>
        </div>
    )
}

export default Links