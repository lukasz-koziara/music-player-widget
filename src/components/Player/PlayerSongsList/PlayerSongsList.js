import React from 'react';
import './PlayerSongsList.css';
import {withSongs} from "../../../contexts/Songs";
import {Scrollbars} from 'react-custom-scrollbars';


const PlayerSongList = (props) => (

        <div className='PlayerSongList-SongListBody'
             style={{
                 opacity: props.isExpanded ? '1' : '0'
             }}>
            <div className='PlayerSongList-PlaylistTitle'>
                <button className='PlayerSongList-PlaylistBack'
                        onClick={props.playlistHideHandler}/>
                <p>Playlist</p>
            </div>
            <div className={'PlayerSongList-List'}>
                <Scrollbars style={{height: 360, width: 340}}>
                    {props.songs.map((song) =>
                        <div key={song.id} className={'PlayerSongList-Song'}>
                            <div className={"PlayerSongList-SongInfo"}>
                                <p className={'PlayerSongList-Duration-Artist'}>{song.duration} | {song.artist}</p>
                                <p className={'PlayerSongList-Title'}>{song.title}</p>
                            </div>
                            <div className={'PlayerSongList-SongControls'}>
                                <button className={"fas fa-share-alt PlayerSongList-Share"}></button>
                                <button className={"fas fa-heart PlayerSongList-Like"}></button>
                            </div>
                            <div className={'PlayerSongList-Divider'}/>
                        </div>
                    )}
                </Scrollbars>
            </div>

        </div>

);

export default withSongs(PlayerSongList)