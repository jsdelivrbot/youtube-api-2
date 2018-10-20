import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelect }) => {
    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object" />
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        <h6>{video.snippet.title}</h6>
                        <p>{video.snippet.channelTitle}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;