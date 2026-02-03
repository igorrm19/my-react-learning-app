import PropTypes from 'prop-types';

const UserAvatar = ({ imageURL, sizeH, sizeW }) => {
    return (
        <>
            <img src={imageURL} height={sizeH} width={sizeW} />
        </>
    )
}

export default UserAvatar;


UserAvatar.propTypes = {
    imageURL: PropTypes.string,
    sizeH: PropTypes.number,
    sizeW: PropTypes.number
}
