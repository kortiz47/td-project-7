import Photo from "./Photo.jsx";
import PropTypes from "prop-types"
import { useParams } from "react-router-dom";

const PhotoList = ({ photos, title }) => {
    const { query } = useParams();
    console.log(query)
    if (photos.length>0) {
        return (
            <div className="photo-container">
                <h2>{title}</h2>
                <ul>
                    {photos.map(photo => <Photo key={photo.id} photoData={photo} />)}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="photo-container">
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </div>
        );
    }

}

PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
}
export default PhotoList;