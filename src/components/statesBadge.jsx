import PropTypes from '../../node_modules/prop-types/prop-types';

const statesBadge = ({ status = 'online' }) => {
    return (
        <>
            {/*if and else*/}
            {status === 'online' ? <p>Online</p> : <p>Offline</p>}
        </>
    )
}

export default statesBadge;


statesBadge.propTypes = {
    status: PropTypes.string
}
