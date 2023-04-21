import {useState} from 'react'
import ShowLink from './components/ShowLink'
import AddLink from './components/AddLink'

function App() {
  
  const [list,setList] = useState([])
  
  const appendList = (marker,link)=>{
    setList([...list,{marker,link}])
    
  }
  return (
    <div className="App">
     <AddLink add={appendList}/>
      <ol>
        <ShowLink list={list} />
      </ol>
    </div>
  );
}

export default App;
