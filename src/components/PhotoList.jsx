import Photo from "./Photo.jsx";
import PropTypes from "prop-types"


const PhotoList = ({ photos, title }) => {
    if (photos.length === 0) {
        return(
            <div className="photo-container">
                <h2>There were no matches for your search</h2>
            </div>
        );
    } else {
        return (
            <div className="photo-container">
                <h2>{title}</h2>
                <ul>
                    {photos.map(photo => <Photo key={photo.id} photoData={photo} />)}
                </ul>
            </div>
        );
    }
}


PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
}
export default PhotoList;