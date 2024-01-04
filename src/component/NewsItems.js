import React from 'react'

const NewsItems = (props)=> {
    let {title, description, imgUrl, newsUrl,author,date , source }= props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>  
        <span className="badge rounded-pill bg-danger" >{source}</span>
        </div>
                <img src={!imgUrl?"https://s.yimg.com/ny/api/res/1.2/rrImVxy0fvge6mLavgYa2A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MTc-/https://s.yimg.com/os/creatr-uploaded-images/2020-08/0d843810-de6a-11ea-b7e4-431f4255d181":imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}..<span className="badge text-bg-info">New</span></h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>by author {!author?"Unknown" :author} On {new Date (date).toGMTString()}</small></p>
                    <a rel="noreferrer"href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
        </div>

      </div>
    )
 
}

export default NewsItems
