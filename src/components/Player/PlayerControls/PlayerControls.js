import React from 'react'
import './PlayerControls.css'


const playerControls = () => (
        <div className={'content'}>
            <div className={'controlContainer'}>
                <button className={"fas fa-share-alt Share"}></button>
                <button className={"fas fa-step-backward Prev Control"}></button>
                <button className={"fas fa-play Play Control"}></button>
                <button className={"fas fa-pause Pause Control"}></button>
                <button className={"fas fa-step-forward Next Control"}></button>
                <button className={"fas fa-heart Like"}></button>
            </div>
        </div>

    )
;

export default playerControls