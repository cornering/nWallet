import { connect } from 'react-redux'
import { toggleMenu } from '../redux/actions/menu'

import ToggleButtonElement from '../views/elements/toggleButton'

const mapStateToProps = (state, props) => ({
    ...props,
    toggled: state.menu.toggled
});

const mapDispatchToProps = dispatch => ({
    onClick: () => { dispatch(toggleMenu()) }
});

const ToggleButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleButtonElement);

export default ToggleButton;