import React from "react"
import classes from '../PlayerControls.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const prevButton = (props) => (
    <div className={classes.Prev}><FontAwesomeIcon icon={"step-backward"}/>{props.label}</div>
);

export default prevButton
