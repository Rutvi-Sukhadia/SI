import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY:'scroll',border:'1px solid rgb(8, 4, 44)', height:'74vh' }}>
            {props.children}
        </div>
    )
}

export default Scroll;