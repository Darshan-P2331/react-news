import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import Category from '../components/category/Category'
import './home.css'

const Home = () => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  const filteredNews = news.filter(data => data.title.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    const refreshData = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=6&category=${category}`
      )
        console.log(res.data)
      setNews(res.data.articles)
    }
    refreshData()
  }, [category, page])
  

  

  return (
    <div className="container">
      <section>
        <h1>React News</h1>
        <div className="news__search">
          <input type="text" name="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Category category={category} setCategory={setCategory} />
        <div className="news__cards">
          {
            filteredNews.map((data,i) => (
              <Card
              key={i}
                imageUrl={data.urlToImage}
                title={data.title}
                description={data.description}
                url={data.url}
              />
            ))
          }
        </div>
        <div className="paging">
          <button className="btn" onClick={()=> setPage(page-1)} >Prev</button>
          <button className="btn"  onClick={()=> setPage(page+1)}>Next</button>
        </div>
      </section>
    </div>
  )
}

export default Home