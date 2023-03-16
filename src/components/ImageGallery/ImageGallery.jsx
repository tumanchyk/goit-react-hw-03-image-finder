import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled'; 
import { ImageGalleryItem } from './ImageGalleryItem';
export function ImageGallery({items, onImgClick}){
        return(
            <Gallery>
                {items.map((item) => <ImageGalleryItem key={item.id} item={item} onClick={onImgClick}></ImageGalleryItem>)}
            </Gallery>
        )
 }
 ImageGallery.propTypes = {
    items: PropTypes.array.isRequired,
    onImgClick: PropTypes.func.isRequired,
 }