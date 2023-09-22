import React, { useEffect, useState } from 'react';
import Axios from "axios";

const App = () => {
    const [newsData, setnewsData] = useState([])
    useEffect(()=>{
       Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=da083256778d4c069bc37db6aeebff4f")
       .then((res)=>{
           setnewsData(res.data.articles)
           
       })
    },[])
    return (
        <div>
            <div className='container ' style={{marginTop: "40px"}}>
                <div className='row'>
                     {
                         newsData.map((item,id)=>(
                            <div className='col-md-4 ' key={id}>
                                  <h4>{item.title}</h4>
                                  <img src={item.urlToImage} className='img-fluid'/>
                                   <h5>The Source From {item.source.name}</h5>
                                  <h6 style={{marginTop:"20px"}}>{item.content}</h6>
                                  <p>{item.description}</p>
                                  <p><i>{item.publishedAt}</i></p>
                                  <a href={item.url} className='btn btn-danger'>READ MORE</a>

                            </div>
                         ))
                     }
                </div>
            </div>
        </div>
    );
}

export default App;
