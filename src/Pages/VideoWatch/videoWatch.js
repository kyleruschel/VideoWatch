import React, { useState } from 'react';
import SearchInput from '../../Components/Input/input';
import VideoList from '../../Components/VideoList/videoList';
import youtube, { KEY } from '../../Apis/youtube';
import VideoDetail from '../../Components/VideoDetail/videoDetail';
import './videoWatch.css';

const VideoWatch = () => {
    const [search, setSearch] = useState('');
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const onInputChange = e => {
        setSearch(e);
    }

    const onFormSubmit = e => {
        e.preventDefault();
        onTermSubmit(search);
    }

    const onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 50,
                order: 'viewCount',
                key: KEY,
                q: term,
            }
        });

        setSelectedVideo(response.data.items[0]);
        return setData(response.data.items);
    }

    const onVideoSelect = video => {
        setShow(true);
        setSelectedVideo(video);
    }

    return (
        <div className="rootContainer">
            <div className='ui container'>
                <SearchInput
                    search={search}
                    onInputChange={onInputChange}
                    onFormSubmit={onFormSubmit}
                />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail
                                selectedVideo={selectedVideo} />
                        </div>
                        <div
                            className='five wide column'>
                            <VideoList
                                videos={data}
                                onVideoSelect={onVideoSelect}
                                show={show}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoWatch;