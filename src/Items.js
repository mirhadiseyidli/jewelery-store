import "./styles.css";
import React, { useState } from 'react';

function Items(props) {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function handleClick1() {
        setCount(count - 1);
    }

    return (
        <div className="itemStyle">
            <div className="itemsStyle">
                <div className="jewelryimageStyle">
                    <img src={props.picLink} alt='img' className="jewStyle"/>
                </div>
                <div className="jewelrydescriptionStyle">
                    <button onClick={handleClick} className='button'>+</button>
                    <h3>{props.jewName}</h3>
                    <p className="textStyle">{props.jewDescription}</p>
                </div>
                <div className='itemcount'>
                    <h1 className="itemscount">{'Items in cart ' + count}</h1>
                    <button onClick={handleClick1} className='button1'>-</button>
                </div>
            </div>
        </div>
    );
};

export default Items;