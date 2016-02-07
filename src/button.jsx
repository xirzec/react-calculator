import React from "react";
import Radium from "radium";

const Button = (props) => {
    return <button
        onClick={props.onClick}
        style={[
            styles.base,
            styles[props.kind]
        ]}>
        {props.label}
    </button>;
}

Button.propTypes = {
    label: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    kind: React.PropTypes.oneOf(['primary', 'secondary', 'alternate']).isRequired
}

const styles = {
    base: {
        color: '#444',
        height: 30,
        width: 60
    },
    
    primary: {
        color: '#FEFEFE',
        backgroundColor: '#4D90FE',
        border: '1px solid #3079ED'
    },
    
    secondary: {
        backgroundColor: 'D6D6D6',
        border: '1px solid #C6C6C6'
    },
    
    alternate: {
        backgroundColor: '#F5F5F5',
        border: '1px solid #DEDEDE'
    }
};

export default Radium(Button);