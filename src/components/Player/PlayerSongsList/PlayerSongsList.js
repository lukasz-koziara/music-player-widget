import React from 'react';
import Helper from '../../../hoc/Helper';
import './PlayerSongsList.css';

const playerSongList = () => (
    <Helper>
        <div className='SongListBody'>
            <div className='PlaylistTitle'>
                <button className='PlaylistBack' />
                <p>Playlist</p>
            </div>
            <div className='SongsList'>

            </div>
        </div>
    </Helper>
);

export default playerSongList