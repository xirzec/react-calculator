import Display from "./display";
import HistoryPanel from "./historyPanel";
import InputPanel from "./inputPanel";
import React from "react";

export default () => {
    return <div>
        <Display activeText="Active Text" prevText="previous answer" />
        <InputPanel/>
        <HistoryPanel/>
    </div>;
};