import React from 'react'
import './category.css'

// business entertainment general health science sports technology

const Category = ({category,setCategory}) => {
  return (
    <div className="categories__container">
    <div className="categories">
        {
        ['general','business','entertainment','health','science','sports','technology'].map((cat,i) => (

            <button key={i} className={category === cat ? 'pill active': 'pill'} onClick={() => setCategory(cat)}>{cat}</button>
        ))
        }
        </div>
    </div>
  )
}

export default Category