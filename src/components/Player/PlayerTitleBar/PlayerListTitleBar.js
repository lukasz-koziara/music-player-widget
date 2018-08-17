import React from 'react';
import './PlayerListTitleBar.css'
import {withSongs} from "../../../contexts/Songs";

const PlayerListTitleBar = (props) => {
    const song = props.songs.find(song => song.id === props.songId);
    return (
        <div className="PlayerListTitleBar">
            <p className="PlayerListTitleBar-SongAuthor">{song && song.artist}</p>
            <p className="PlayerListTitleBar-SongTitle">{song && song.title}</p>
        </div>
    )
};

export default withSongs(PlayerListTitleBar)