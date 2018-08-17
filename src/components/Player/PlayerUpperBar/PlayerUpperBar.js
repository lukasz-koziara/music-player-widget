import React from 'react';
import './PlayerUpperBar.css';
import {withSongs} from "../../../contexts/Songs";
import {withLayout} from "../../../contexts/Layout";


const PlayerUpperBar = (props) => (
    <div className='PlayerUpperBar-BarBg'>
        <button className='PlayerUpperBar-Repeat'/>
        <button className='PlayerUpperBar-Shuffle'/>
        <button className='PlayerUpperBar-Refresh'/>
        <button className='fas fa-bars PlayerUpperBar-Menu' onClick={props.playlistShowHandler}/>

    </div>
);

export default withLayout(withSongs(PlayerUpperBar))