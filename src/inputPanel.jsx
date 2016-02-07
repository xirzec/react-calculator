import Button from "./button";
import React from "react";

export default class InputPanel extends React.Component {
    render() {
        let func = () => { console.log("test"); };
        return <div style={styles}>
           <Button label="7" onClick={func} kind="alternate" />
           <Button label="8" onClick={func} kind="alternate" />
           <Button label="9" onClick={func} kind="alternate" />
           <Button label="/" onClick={func} kind="secondary" />
           <Button label="4" onClick={func} kind="alternate" />
           <Button label="5" onClick={func} kind="alternate" />
           <Button label="6" onClick={func} kind="alternate" />
           <Button label="*" onClick={func} kind="secondary" />
           <Button label="1" onClick={func} kind="alternate" />
           <Button label="2" onClick={func} kind="alternate" />
           <Button label="3" onClick={func} kind="alternate" />
           <Button label="-" onClick={func} kind="secondary" />
           <Button label="0" onClick={func} kind="alternate" />
           <Button label="." onClick={func} kind="alternate" />
           <Button label="=" onClick={func} kind="primary" />
           <Button label="+" onClick={func} kind="secondary" />
           <Button label="C" onClick={func} kind="secondary" />
        </div>;
    }
}

const styles = {
    width: 240
};