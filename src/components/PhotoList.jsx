import Photo from "./Photo.jsx";
import PropTypes from "prop-types"
import { useParams } from "react-router-dom";

const PhotoList = ({ photos, title }) => {
    const { query } = useParams();
    console.log(query)
        return (
            <div className="photo-container">
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