import React from "react"
import data from "../data.json"
import { useEffect } from "react"



let date = new Date()
const currentDay = date.getDay()




const Bar = () => {
    useEffect(() => {
        const barui = document.querySelectorAll(".bar__ui")
        barui.forEach((i) => {
            i.addEventListener("mouseover", () => {
                removeTooltip()
                i.previousElementSibling.style.display = "flex"
            })

            i.addEventListener("click", () => {
                removeTooltip()
                i.previousElementSibling.style.display = "flex"
            })
            i.addEventListener("focusout", () => {
                removeTooltip()
            })

            i.addEventListener("mouseout", () => {
                removeTooltip()
            })
        })

        const removeTooltip = () => {
            const tooltip = document.querySelectorAll(".bar__tooltip")
            tooltip.forEach((i) => {
                i.style.display = "none"
            })
        }

    }, [])
    return (
        <>
            {data.map((i) => {
                const scale = 3
                const valueAmount = i.amount * scale
                return (
                        <article key={i.id} className="bar">
                            <div className="bar__con">
                                <div className="bar__tooltip">${i.amount}</div>
                                <div className="bar__ui" style={{ height: `${valueAmount}px`, background: i.idDay == currentDay ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"}}></div>
                            </div>
                            <span>{i.day}</span>
                        </article>
                );
            })}
        </>
    );

}

export default Bar