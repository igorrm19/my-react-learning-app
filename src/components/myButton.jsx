import PropTypes from 'prop-types';

const MyButton = ({ label, color, onClick }) => {
    return (
        <button className="my-button" style={{ backgroundColor: color }} onClick={onClick}>{label}</button>
    )
}

export default MyButton;


MyButton.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

