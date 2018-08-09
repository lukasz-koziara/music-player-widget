import React from 'react';
import './PlayerUpperBar.css';

const playerUpperBar = () => (
    <div className='BarBg'>
        <button className='Repeat'></button>
        <button className='Shuffle'></button>
        <button className='Refresh'></button>
        <button className='fas fa-bars Menu'></button>

    </div>
);

export default playerUpperBar