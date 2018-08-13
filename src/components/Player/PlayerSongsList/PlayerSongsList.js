import React from 'react';
import Helper from '../../../hoc/Helper';
import './PlayerSongsList.css';
import {withSongs} from "../../../contexts/Songs";


const playerSongList = () => (
    <Helper>
        <div className='PlayerSongList-SongListBody'>
            <div className='PlayerSongList-PlaylistTitle'>
                <button className='PlayerSongList-PlaylistBack'/>
                <p>Playlist</p>
            </div>
            <div className={'PlayerSongList-List'}>
                <div className={'PlayerSongList-Song'}>
                    <div className={"PlayerSongList-SongInfo"}>
                        <p className={'PlayerSongList-Duration-Artist'}>6:66 | In Flames</p>
                        <p className={'PlayerSongList-Title'}>Episode 666</p>
                    </div>
                    <div className={'PlayerSongList-SongControls'}>
                        <button className={"fas fa-share-alt PlayerSongList-Share"}></button>
                        <button className={"fas fa-heart PlayerSongList-Like"}></button>
                    </div>
                </div>
                <div className={'PlayerSongList-Divider'}/>
                <div className={'PlayerSongList-Song'}>
                    <div className={"PlayerSongList-SongInfo"}>
                        <p className={'PlayerSongList-Duration-Artist'}>6:66 | In Flames</p>
                        <p className={'PlayerSongList-Title'}>Episode 666</p>
                    </div>
                    <div className={'PlayerSongList-SongControls'}>
                        <button className={"fas fa-share-alt PlayerSongList-Share"}></button>
                        <button className={"fas fa-heart PlayerSongList-Like"}></button>
                    </div>
                </div>
                <div className={'PlayerSongList-Divider'}/>
            </div>

        </div>
    </Helper>
);

export default withSongs(playerSongList)