import Reat from "react"
import ReactDOM from "react-dom"
import './List.css'
function List({people})
{
    return(
      <div className="gallery">
        {people.map((person)=>
        {
            const{id,name,age,image} = person;
            return <article key={id} className="person">
                 <img src={image} alt={name}/>
                 <div className="info-container">
                     <h4>{name}</h4>
                     <p>{age} Years</p>
                 </div>
            </article>
        })}
       </div> 

    );
}
export default List