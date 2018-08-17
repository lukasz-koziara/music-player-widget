import React from 'react'
import './PlayerControls.css';
import {withSongs} from "../../../contexts/Songs";

const PlayerControls = (props) => {
    const song = props.songs.find(song => song.id === props.songId);
    const max = props.songs.length;
    return (

        <div className='PlayerControls-Content'>
            <div className='PlayerControls-ControlContainer'>
                <button className={"fas fa-share-alt PlayerControls-Share"}/>
                <button className={"fas fa-step-backward PlayerControls-Prev Control"}
                        onClick={() => {

                                props.setSongId(song.id - 1);
                            if (props.songId === 0) {
                                props.setSongId(1)
                            }
                        }}
                />
                <button
                    className={props.isPaused ? "fas fa-play PlayerControls-Play Control" : "fas fa-pause PlayerControls-Pause Control"}
                    onClick={props.handleClick}/>
                <button className={"fas fa-step-forward PlayerControls-Next Control"}
                        onClick={() => {
                            props.setSongId(song.id + 1)
                        }}
                />
                <button className={"fas fa-heart PlayerControls-Like"}/>
            </div>
        </div>
    )
}




export default withSongs(PlayerControls)