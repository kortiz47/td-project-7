import Photo from "./Photo.jsx";
import PropTypes from "prop-types"

const PhotoList = ({photos, title}) => {
    console.log(photos)
    return (
        <div className="photo-contianer">
            <h2>{title}</h2>
            <Photo photo={photos}/>
        </div>
    );
}

PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
}
export default PhotoList;