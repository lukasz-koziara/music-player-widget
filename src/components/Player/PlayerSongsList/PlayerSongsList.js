import React from 'react';
import Helper from '../../../hoc/Helper';
import './PlayerSongsList.css';


const playerSongList = () => (
    <Helper>
        <div className='PlayerSongList-SongListBody'>
            <div className='PlayerSongList-PlaylistTitle'>
                <button className='PlayerSongList-PlaylistBack'/>
                <p>Playlist</p>
            </div>
                    <div className={'PlayerSongList-List'}>
                        <div className={'PlayerSongList-Song'}>
                            <p className={'PlayerSongList-Duration'}>3:16</p>
                            <p className={'PlayerSongList-Artist'}>Dupa</p>
                            <p className={'PlayerSongList-Title'}>Cycki</p>
                            <button className={"fas fa-share-alt PlayerSongList-Share"}></button>
                            <button className={"fas fa-heart PlayerSongList-Like"}></button>
                            <div className={'PlayerSongList-Divider'}/>
                        </div>
                    </div>
        </div>
    </Helper>
);

export default playerSongList