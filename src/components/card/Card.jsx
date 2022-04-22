import React from 'react'
import './card.css'

const Card = ({imageUrl,title,description,url}) => {
  return (
    <article className="card">
      <div className="card__image">
        <img src={imageUrl? imageUrl : './no-image-available.webp'} alt={title} />
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        <a href={url} target="_blank" className="btn ">Read more</a>
      </div>
    </article>
  )
}

export default Card