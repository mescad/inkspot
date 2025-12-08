
import './OptionCard.css'


import solvent3 from '../../assets/solvent3.png'


function OptionCard (props){

    return(
        <div className='option-card'>
          <h2 className='option-name'>{props.name}
          </h2>
          <img className="option-card-img" alt='option-pic' src={solvent3}/>

        </div>
    );
}



export default OptionCard