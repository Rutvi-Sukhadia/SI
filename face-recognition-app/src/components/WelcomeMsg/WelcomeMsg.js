import React from 'react';

const WelcomeMsg = () => {
    return (
        <div style={{clear: 'left'}}>
            <div className="fa2 white b">
                {'Welcome Rutvi, Your current rank based on the number of faces detected is '}
            </div>
            <div className="fa1 white b">
                <h2>{'#5'}</h2>
            </div>
        </div>
    )
}

export default WelcomeMsg;