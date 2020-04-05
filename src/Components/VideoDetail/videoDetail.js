import React from 'react';
import { clean } from '../../Helpers/helper';

const VideoDetail = ({ selectedVideo }) => {
    return (
        <div>
            <div>
                <div className='ui embed' style={{ height: '623px' }}>
                    <iframe
                        title='iframe player'
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                    />
                </div>
                <div className='ui segment'>
                    <h4 className='header'>{clean(selectedVideo.snippet.title)}</h4>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;