import {useState} from 'react'
import ShowLink from './components/ShowLink'
import AddLink from './components/AddLink'

function App() {
  
  const [list,setList] = useState([])
  
  const appendList = (item)=>{
    console.log(item)
    setList([...list,item])
    // console.log(list);
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
