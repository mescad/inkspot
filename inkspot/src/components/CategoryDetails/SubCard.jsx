import './SubCard.css'

function SubCard(props){




    return (
        <>
         <section className="subcard" onClick={props.onClick} style={{ cursor: "pointer" }}>
        
        <img className='subcard-image' alt="product-img" src={props.imgsrc} />
        <h2 className='subcard-name'>{props.name}</h2>
        <p className='subcard-description'>{props.details}</p>
        <button className='subcard-button'>Learn more</button>
       
        


        

      </section>
        
        
        
        
        
        
        
        </>
    );
}


export default SubCard