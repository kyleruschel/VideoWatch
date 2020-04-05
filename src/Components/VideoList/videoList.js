import React from 'react';
import { clean } from '../../Helpers/helper';
import './videoList.css';

const VideoList = ({ videos, onVideoSelect, show }) => {
    if (!videos.length) {
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
                    <div id='video-list-content' className='content'>
                        <div 
                        id='video-list-header' 
                        className='header'
                        style={{ borderBottom: show ? '1px solid #fff' : 'none' }}>
                            {clean(v.snippet.title)}
                        </div>
                        <div style={{ color: 'wheat', textAlign: 'center', marginTop: '2%'}}>
                            {`YouTube Channel: ${v.snippet.channelTitle}`}
                        </div>
                        <div style={{ color: 'wheat', textAlign: 'center', marginTop: '2%'}}>
                            {`Date Published: ${new Date(v.snippet.publishedAt).toDateString()}`}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VideoList;