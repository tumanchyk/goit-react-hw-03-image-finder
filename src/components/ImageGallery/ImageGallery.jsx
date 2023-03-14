import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled'; 
import { ImageGalleryItem } from './ImageGalleryItem';
export function ImageGallery({items, onImgClick}){
        return(
            <Gallery>
                {items.map((item) => <ImageGalleryItem key={item.id} imgData={item} onClick={()=> onImgClick(item.id)}></ImageGalleryItem>)}
            </Gallery>
        )
 }
 ImageGallery.propTypes = {
    items: PropTypes.array.isRequired,
 }