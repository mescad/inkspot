
import './Card.css'


function Card(props) {




  return (
    <>
      <section className="card" onClick={props.onClick} style={{ cursor: "pointer" }}>
        
        <img className='card-image' alt="product-img" src={props.imgsrc} />
        <h2 className='card-name'>{props.name}</h2>
        <p className='card-description'>{props.details}</p>
        <button className='card-button'>Learn more</button>
       
        


        

      </section>
    </>
  );
}

export default Card;
