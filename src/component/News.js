import React, {useEffect,useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
const  [articles, setArticles] = useState([])
const  [loading, setLoading] = useState(true)
const  [page, setPage] = useState(1)
const  [totalResults, setTotalResults] = useState(0)

 
const capitalizeFirstLetter = (string) =>{                        //CAPITAL FIRST LETTER CODE
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const  newsUpdate = async ()=>{
  props.setProgress(10);
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d5ac75ca45034f48970f5b14601631a8&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true)
  let data = await fetch(url);
  props.setProgress(30);
  let parsedData= await data.json()  
  props.setProgress(70);
     setArticles(parsedData.articles)
     setTotalResults(parsedData.setTotalResults) 
     setLoading(false)
     props.setProgress(100);
 }

 //This is how we can Fetch the data from the News API
 useEffect (() => {
   document.title= `${capitalizeFirstLetter (props.category)} - eNews`;
   newsUpdate();
   // eslint-disable-next-line
  }, [])




// This function is for infinite Scroll
const fetchMoredata  = async()=>{
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d5ac75ca45034f48970f5b14601631a8&page=${page+1}&pageSize=${props.pageSize}`; 
  setPage(page+1)
    let data = await fetch(url);
    let parsedData= await data.json()       
    setArticles(articles.concat (parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
};

 
    return (  
      <>
      <div className='container pt-5  ' > 
        <h1 className="text-center " style={{ marginTop: ' 40px 0px',marginBottom:'35px'}}>eNews - {capitalizeFirstLetter (props.category)} Top Headlines</h1>
        <hr />

        {/* this is a spinner part if page is loading then will show */}
        {loading && <Spinner/>}    
              {/* Infinite scroll part start */}
            <InfiniteScroll                              
                dataLength={articles.length}
                next={fetchMoredata}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>} >  
                     {/* Infinite scroll part end below is only </Infinitescroll> */}
                <div className="container"> 
                  <div className="row">
                    {/* use this when we use buttons next and previous */}
                    {/* {!this.state.loading && this.state.articles.map((element)=>{ */}

                      {/* use this when infinite scroll  */}
                    {articles.map((element)=>{
                      return <div className="col-md-4" key={element.url}>
                      <NewsItems title= {element.title} description={element.description} imgUrl={element.urlToImage} newsUrl= {element.url} author={element.author} date={element.publishedAt}  source={element.source.name}/> 
                      </div>
                    })}          
                  </div>
                 </div> 
           </InfiniteScroll>

           {/* This code for next and previous Button */}
           {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className='btn btn-dark mx-4' onClick={this.handlePrevclick}> &larr; previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className='btn btn-dark' onClick={this.handleNextclick}>Next &rarr;</button>
           </div> */}
           </div>
      </>
    )
  
}
 News.defaultProps={
  country : 'in',
  pageSize:8,
  category:'general'
  
}

 News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
