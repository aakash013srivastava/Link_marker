import {useState} from 'react'
const AddLink = ({add})=>{
    const [txt1,setTxt1] = useState('')
    const [txt2,setTxt2] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();       
        add(txt1,txt2);
        setTxt1('');
        setTxt2('');
   }

    const handleChange1 = (event)=>{
        // console.log(event.target.value);
        setTxt1(event.target.value)
    }
    const handleChange2 = (event)=>{
        // console.log(event.target.value);
        setTxt2(event.target.value)
    }
    return <div><form onSubmit={handleSubmit}>
        <label>Add Link Marker:</label>
        <input text={txt1} onChange={handleChange1} required/>
        <label>Add Link:</label>
        <input text={txt2} onChange={handleChange2} required/>
        <button type="submit">Save</button>
    </form></div>


}

export default AddLink;