import Button from "./button";
import React from "react";
import Radium from "radium";

const buttons = [
    { label: "7", kind: "alternate" },
    { label: "8", kind: "alternate" },
    { label: "9", kind: "alternate" },
    { label: "/", kind: "secondary" },
    { label: "4", kind: "alternate" },
    { label: "5", kind: "alternate" },
    { label: "6", kind: "alternate" },
    { label: "*", kind: "secondary" },
    { label: "1", kind: "alternate" },
    { label: "2", kind: "alternate" },
    { label: "3", kind: "alternate" },
    { label: "-", kind: "secondary" },
    { label: "0", kind: "alternate" },
    { label: ".", kind: "alternate" },
    { label: "=", kind: "primary" },
    { label: "+", kind: "secondary" },
];

const InputPanel = (props) => {
    const func = (label) => { console.log(label); };
    const buttonEls = buttons.map((button) => {
        return <Button 
            key={button.label}
            label={button.label} 
            kind={button.kind} 
            onClick={() => func(button.label) } 
        />;
    });
    return <div style={styles}>
        {buttonEls}
    </div>;
}

const styles = {
    width: 280
};

export default Radium(InputPanel);