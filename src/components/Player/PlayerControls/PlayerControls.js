import React from 'react'
import './PlayerControls.css'


const playerControls = () => (
        <div className='PlayerControls-Content'>
            <div className='PlayerControls-ControlContainer'>
                <button className={"fas fa-share-alt PlayerControls-Share"}></button>
                <button className={"fas fa-step-backward PlayerControls-Prev Control"}></button>
                <button className={"fas fa-play PlayerControls-Play Control"}></button>
                <button className={"fas fa-pause PlayerControls-Pause Control"}></button>
                <button className={"fas fa-step-forward PlayerControls-Next Control"}></button>
                <button className={"fas fa-heart PlayerControls-Like"}></button>
            </div>
        </div>

    )
;

export default playerControls