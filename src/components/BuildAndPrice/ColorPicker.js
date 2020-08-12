import React from "react";
import classnames from 'classnames';
import "./BuildAndPrice.css"

const ColorPicker = (props) => {
    const selectVehicleData = props.vehicleData.filter(veh => veh.detailKey === props.selectedVehicle)[0];
    if(selectVehicleData) {
        return (
            <div className={"colorBox"}>
                <table>
                    <tbody>
                        <tr>
                            {selectVehicleData.colors.map((color, i) => (
                                <td key={"color-picker-" + color[1]}>
                                    <img className={props.selectedColor === i ? 'colorBox selected' : 'colorBox'}
                                        alt={color[0]}
                                        onClick={props.selectColor}
                                        data-color={i}
                                        data-color-name={color[0]}
                                        src={color[1]}
                                        /> <br/>
                                        <span>{color[0]}</span>
                                </td>
                            ))}
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }

    return null;
}

export default ColorPicker;