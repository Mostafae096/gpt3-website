import React from 'react'
import './article.css'

function Article({ img, date, title }) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-img">
        <img src={img} alt="artical image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article