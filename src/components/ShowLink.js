const ShowLink = ({list})=>{
    
    const rendered_list = list.map((item,index)=><li key={index}><a href={item.link}>{item.marker}</a></li>)
    return <ol>{rendered_list}</ol>
}

export default ShowLink;