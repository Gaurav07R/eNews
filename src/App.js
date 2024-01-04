import './App.css';
import React,{useState} from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Newshome from './component/Newshome';

const App =()=> {
 const  pageSize=15;
 const [progress,setProgress]=useState(0)

    return ( 
      <div>
        <BrowserRouter>         
        <Navbar />  
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        
       <Routes> 
          {/* <News setProgress={setProgress} setProgress={this.state.setProgress} pageSize={pageSize}  country="in" category="entertainment"/> */}
             {/* <Route path='/' element={<News  setProgress={setProgress}  key='general'   pageSize={pageSize}  country="in" category="general"/>}/>  */}
             <Route path='/' element={<Newshome />}/> 

             <Route path='/sports' element={<News setProgress={setProgress}  key='sports' pageSize={pageSize}  country="in" category="sports"/>}/> 
             <Route path='/technology' element={<News setProgress={setProgress}  key='technology' pageSize={pageSize}  country="in" category="technology"/>}/> 
             <Route path='/general' element={<News setProgress={setProgress}  key='general'   pageSize={pageSize}  country="in" category="general"/>}/> 
             <Route path='/science' element={<News setProgress={setProgress}  key='science' pageSize={pageSize}  country="in" category="science"/>}/> 
             <Route path='/entertainment' element={<News setProgress={setProgress}  key='entertainment' pageSize={pageSize}  country="in" category="entertainment"/>}/> 
             <Route path='/health' element={<News setProgress={setProgress}  key='health' pageSize={pageSize}  country="in" category="health"/>}/> 
             <Route path='/business' element={<News setProgress={setProgress}  key='business' pageSize={pageSize}  country="in" category="business"/>}/> 
        </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;

