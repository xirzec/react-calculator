import Display from "./display";
import HistoryPanel from "./historyPanel";
import InputPanel from "./inputPanel";
import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { pressKey } from "../data/actions";

const Calculator = (props) => {
    return <div>
        <Display activeText={props.display} prevText="" />
        <InputPanel onKeyPress={props.onKeyPress} />
        <HistoryPanel/>
    </div>;
};

Calculator.propTypes = {
    display: PropTypes.string.isRequired,
    onKeyPress: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        display: state.get('buffer').join(" ")
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onKeyPress: (key) => {
            dispatch(pressKey(key));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);