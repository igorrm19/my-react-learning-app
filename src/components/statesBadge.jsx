import PropTypes from 'prop-types';

const StatesBadge = ({ status = '' }) => {
    return (
        <>
            {/*if and else*/}
            {status === '' && <p className="badgeOffline">Status Indefinido</p>}
            {status === 'online' && <p className="badgeOnline">Online</p>}
            {status === 'offline' && <p className="badgeOffline" style={{ backgroundColor: red, color: withe }}>Offline</p>}
        </>
    )
}


export default StatesBadge;


StatesBadge.propTypes = {
    status: PropTypes.string
}
