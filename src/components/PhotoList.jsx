import Photo from "./Photo.jsx";
import PropTypes from "prop-types"

const PhotoList = ({photos, title}) => {
    
    return (
        <div className="photo-contianer">
            <h2>{title}</h2>
            <ul>
                {photos.map(photo => <Photo key={photo.id} photoData={photo} />)}
            </ul>
        </div>
    );
}

PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
}
export default PhotoList;