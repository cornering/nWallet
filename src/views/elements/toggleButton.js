import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

const ToggleButtonElement = ({ className, toggled, onClick }) => {
    className = toggled ? className+' toggled' : className;
    return (
        <button className={className} onClick={e => { e.preventDefault(); onClick(); }}>
            <FontAwesome name="angle-right" size="2x"/>
        </button>
    )
};

ToggleButtonElement.propTypes = {
    className: PropTypes.string,
    toggled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ToggleButtonElement;