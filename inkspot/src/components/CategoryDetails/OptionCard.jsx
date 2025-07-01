
import './OptionCard.css'


import solventpic from '../../assets/solvent.png'


function OptionCard (props){

    return(
        <div className='option-card'>
          <h2>{props.name}
          </h2>
          <img className="option-card-img" alt='option-pic' src={solventpic}/>

        </div>
    );
}



export default OptionCard