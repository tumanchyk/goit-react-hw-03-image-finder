import PropTypes from 'prop-types';
import {GalleryItem, GalleryImage } from './ImageGallery.styled'; 
export const ImageGalleryItem = ({item, onClick}) =>{
return (
    <GalleryItem>
        <GalleryImage src={item.webformatURL} alt={item.tags} onClick={()=> onClick(item.id)}></GalleryImage>
    </GalleryItem>
)
}
ImageGalleryItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}