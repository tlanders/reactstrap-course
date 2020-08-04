import React from "react";
import BuildAndPriceImageRotator from "./BuildAndPriceImageRotator";
import ColorPicker from "./ColorPicker";
import EngineSelector from "./EngineSelector";
import ModelPicker from "./ModelPicker";
import ModelPickerCollapse from "./ModelPickerCollapse";

class BuildAndPrice extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <BuildAndPriceImageRotator/>
                <ColorPicker/>
                <EngineSelector/>
                <ModelPicker/>
                <ModelPickerCollapse/>
            </div>
        );
    }
}

export default BuildAndPrice;