import { connect } from 'react-redux'

import WrapperElement from '../views/elements/wrapper'

const mapStateToProps = state => ({
    toggled: state.menu.toggled
});

const mapDispatchToProps = () => ({
    //toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrapperElement);
