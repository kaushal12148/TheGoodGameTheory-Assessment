import React from 'react'

export default function BeerCard({beer}) {
  return (
    <div className="col-md-4 mb-4">
    <div className="card" style={{"width": "18rem", "padding": "12px"}}>
      <img src={beer.image_url} className="card-img-top" alt={beer.name} height={"600px"} width={"10px"}/>
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.tagline}</p>        
      </div>
    </div>
  </div>
  )
}
