import React from 'react';
import './PlayerUpperBar.css';


const playerUpperBar = () => (
    <div className='PlayerUpperBar-BarBg'>
        <button className='PlayerUpperBar-Repeat'></button>
        <button className='PlayerUpperBar-Shuffle'></button>
        <button className='PlayerUpperBar-Refresh'></button>
        <button className='fas fa-bars PlayerUpperBar-Menu' onClick={this.tooglePlaylist}></button>

    </div>
);

export default playerUpperBar