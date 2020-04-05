import React from 'react';
import { clean } from '../../Helpers/helper';
import './videoDetail.css';

const VideoDetail = ({ selectedVideo }) => {
    return (
        <div>
            <div>
                <div id='video-detail-embed' className='ui embed'>
                    <iframe
                        title='iframe player'
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                    />
                </div>
                <div id='video-detail-segment' className='ui segment'>
                    <h4 className='header'>{clean(selectedVideo.snippet.title)}</h4>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;