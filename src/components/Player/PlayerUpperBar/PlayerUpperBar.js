import React from 'react';
import './PlayerUpperBar.css';
import {withSongs} from "../../../contexts/Songs";


const PlayerUpperBar = (props) => (
    <div className='PlayerUpperBar-BarBg'>
        <button className='PlayerUpperBar-Repeat'/>
        <button className='PlayerUpperBar-Shuffle'/>
        <button className='PlayerUpperBar-Refresh'/>
        <button className='fas fa-bars PlayerUpperBar-Menu' onClick={props.playlistShowHandler}/>

    </div>
);

export default withSongs(PlayerUpperBar)