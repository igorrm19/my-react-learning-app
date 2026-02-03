import PropTypes from 'prop-types';

const StatesBadge = ({ status = 'online' }) => {
    return (
        <>
            {/*if and else*/}
            {status === 'online' ? <p className="badgeOnline">Online</p> : <p className="badgeOffline">Offline</p>}
        </>
    )
}

export default StatesBadge;


StatesBadge.propTypes = {
    status: PropTypes.string
}
