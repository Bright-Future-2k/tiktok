import PropTypes from 'prop-types';

function Menu({ children }) {
    return (
        // thẻ <nav></nav> là thẻ html5 nó mang đủ ngữ nghĩa nav = navication (điều hướng)
        <nav>
            {children}
        </nav>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu