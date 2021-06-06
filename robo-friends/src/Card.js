import React from 'react';

const Card = (props) => {
    const {id,name,email} = props;
    return (
        //React uses JSX to create its virtual dom, within brackets we can write html tags or custom components (like <Hello />)
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='Robot'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            
        </div>
    );
}

export default Card;