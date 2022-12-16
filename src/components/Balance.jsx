import React from "react"
import {default as logo} from "../images/logo.svg"

const Balance = () => {
    return (
        <>
            <article className="balance">
                <div className="balance__details">
                    <h3>My balance</h3>
                    <h2>$921.48</h2>
                </div>
                <img className="balance__image" src={logo} alt="" />
            </article>
        </>
    );
}

export default Balance