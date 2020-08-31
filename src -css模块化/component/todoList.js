import React from "react"
import styl from "../static/todoList.module.css"


export default function TodoList() {
    return <ul className={styl.box}>
        <li>列表一</li>
        <li>列表二</li>
        <li>列表三</li>
        <li>列表四</li>
    </ul>
}