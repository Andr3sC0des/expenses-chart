import React from "react"
import Bar from "./Bar"
import Total from "./Total";

const Spending = () => {
    return(
        <>
        <article className="spending">
            <h1>Spending - Last 7 days</h1>
            <section className="bars">
                <Bar />
            </section>
            <Total />
        </article>
        </>
    );
}

export default Spending