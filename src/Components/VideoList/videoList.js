import React from 'react';
import { clean } from '../../Helpers/helper';
import './videoList.css';

const VideoList = ({ videos, onVideoSelect }) => {
    if(!videos.length) {
        return null;
    }

    return (
        <div
            id='video-list-root-container'
            className='ui relaxed divided list'
        >
            {videos.map((v, i) => (
                <div
                    id='video-list'
                    className='item'
                    key={i}
                    onClick={() => onVideoSelect(v)}
                >
                    <img
                        className='ui image'
                        src={v.snippet.thumbnails.medium.url}
                        alt={v.snippet.description} />
                    <div className='content'>
                        <div id='video-list-header' className='header'>{clean(v.snippet.title)}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VideoList;