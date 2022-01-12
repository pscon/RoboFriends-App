import React from 'react'; 

const Card = (props) => {
    const { name, email, id} = props;
    return(
        
<div className=' tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='robots' src={`https://robohash.org/${id} ?size=200x200`} />
    <div className='link bw1 b--solid b--dark-blue dark-blue fw9 pa2 br3 hover-white hover-bg-dark-blue'>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
</div>
    );
}



export default Card;