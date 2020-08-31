import React from "react"
import styl from "../static/list.module.css"


export default function List() {
    return <ul className={styl.box}>
        <li>列表一</li>
        <li>列表二</li>
        <li>列表三</li>
        <li>列表四</li>
    </ul>
}