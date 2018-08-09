import React from 'react'
import classes from './PlayerControls.css'
import PrevButton from "./PrevButton/PrevButton";

const playerControls = () => (
        <div>
            <PrevButton />
            {/*<div className={classes.Play}>Play: <FontAwesomeIcon icon={"play"}/></div>*/}
            {/*<div className={classes.Next}>Next: <FontAwesomeIcon icon={"step-forward"}/></div>*/}
        </div>

);

export default playerControls()