import React from 'react'

function DessertsLists(props) {
    const lowCal = props.data.filter( (d) => {
        return d.calories < 500 
    })
    .sort( (a,b) => {
        return a.calories - b.calories
    })
    .map( (d) => {
        return <li>{d.name} - {d.calories} cal</li>
    })

  return (
    <div>
        <ul> { lowCal } </ul>
    </div>
  )
}

export default DessertsLists