import React, { PropTypes } from "react";
import Radium from "radium";

const Display = (props) => {
    return <div style={styles}>
        <div>{props.prevText}</div>
        <div style={activeLineStyles}>{props.activeText}</div>
    </div>;
}

Display.propTypes = {
    prevText: PropTypes.string.isRequired,
    activeText: PropTypes.string.isRequired
}

const styles = {
    textAlign: 'right',
    width: 270,
    border: '1px solid #C6C6C6',
    boxSizing: 'border-box',
    padding: 5,
    margin: 5,
    minHeight: 48
};

const activeLineStyles = {
    fontSize: '1.6em'
};

export default Radium(Display);