const ShowLink = ({list})=>{
    const rendered_list = list.map((item,index)=><li key={index}>{item}</li>)
    return <ol>{rendered_list}</ol>
}

export default ShowLink;