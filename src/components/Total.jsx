import React from "react"

const Total = () => {
    return(
        <>
        <section className="total">
            <article className="total__details">
                <h3>Total this month</h3>
                <h2>$478.33</h2>
            </article>
            <article className="total__prev">
                <span className="total__perc">+2.4%</span>
                <span className="total__lastmonth">from last month</span>
            </article>
        </section>
        </>
    );
}

export default Total