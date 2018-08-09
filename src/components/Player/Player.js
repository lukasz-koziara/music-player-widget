import React from 'react';
import classes from './Player.css';
import PlayerControls from "./PlayerControls/PlayerControls";

const player = (props) => (
        <div>
        <div className={classes.PlayerLayout}>Hello World</div>
        <PlayerControls {...props.children}/>
        </div>
);

export default player;