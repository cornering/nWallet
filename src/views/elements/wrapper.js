import React from 'react'
import PropTypes from 'prop-types'

const WrapperElement = ({ toggled, children }) => {
    const classList = (toggled) ? 'toggled' : '';
    return (
        <div id="wrapper" className={classList}>
            {children}
        </div>
    );
};

WrapperElement.propTypes = {
    toggled: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default WrapperElement;