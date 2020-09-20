import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'800px', padding:'15px 0 15px 0'}}>
            {props.children}
        </div>
    )
};


export default Scroll; 