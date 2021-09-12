import React from 'react'
import './portfoliolist.scss'
export default function portfoliolist({id,title,active,setSelected}) {
    return (
        <li
        className={active ? "Portfoliolist active" : "Portfoliolist"}
        onClick={() => setSelected(id)}>
        {title}
      </li>
    )
}
