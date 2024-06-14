
import React from 'react';
import { imageList } from './ImageData';
import './ImageList.css';

const ImageListComponent: React.FC = () => {
    return (
        <>
        <div>
        <h1>Gallery</h1>
        </div>
        <div className="image-list">
            {imageList.map(image => (
                <div key={image.id} className="image-item">
                    <img src={`/assets/${image.img}`} alt={image.description} className="image" />
                    <p>{image.description}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default ImageListComponent;

