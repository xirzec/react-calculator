import Display from "./display";
import HistoryPanel from "./historyPanel";
import InputPanel from "./inputPanel";
import React from "react";

export default () => {
    return <div>
        <Display/>
        <InputPanel/>
        <HistoryPanel/>
    </div>;
};