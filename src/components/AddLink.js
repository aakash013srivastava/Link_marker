import {useState} from 'react'
const AddLink = ({add})=>{
    const [txt,setTxt] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(txt);
        add(txt);
        setTxt('')
        
    }

    const handleChange = (event)=>{
        setTxt(event.target.value)
    }
    return <div><form onSubmit={handleSubmit}>
        <label>Add Link:</label>
        <input text={txt} onChange={handleChange}/>
    </form></div>


}

export default AddLink;