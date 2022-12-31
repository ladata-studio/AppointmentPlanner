import React from 'react'

export const Tile = ({ item }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{item[Object.keys(item)[0]]}</p>
      {Object.keys(item)
        .slice(1)
        .map((key, index) => {
          return (
            <p className="tile" key={index}>
              {item[key]}
            </p>
          )
        })}
    </div>
  )
}
