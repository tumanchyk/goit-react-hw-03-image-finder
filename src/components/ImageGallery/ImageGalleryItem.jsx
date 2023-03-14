import PropTypes from 'prop-types';
import {GalleryItem, GalleryImage } from './ImageGallery.styled'; 
export const ImageGalleryItem = ({imgData}) =>{
return (
    <GalleryItem>
        <GalleryImage src={imgData.webformatURL} alt={imgData.tags}></GalleryImage>
    </GalleryItem>
)
}
ImageGalleryItem.propTypes = {
    imgData: PropTypes.object.isRequired,
}