import PropTypes from '../../node_modules/prop-types/prop-types';

const userAvatar = ({ imageURL, sizeH, sizeW }) => {
    return (
        <>
            <img src={imageURL} height={sizeH} width={sizeW} />
        </>
    )
}

export default userAvatar;


userAvatar.propTypes = {
    imageURL: PropTypes.string,
    sizeH: PropTypes.number,
    sizeW: PropTypes.number
}
