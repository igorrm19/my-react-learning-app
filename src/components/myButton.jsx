import PropTypes from '../../node_modules/prop-types/prop-types';

const myButton = ({ label, color }) => {
    return (
        <button style={{ backgroundColor: color }}>{label}</button>
    )
}

export default myButton;


myButton.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string
}

