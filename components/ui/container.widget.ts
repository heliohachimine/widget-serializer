import { IContainer } from "../interfaces/container-widget.interface";
import { IColor } from "../interfaces/core/color.interface";
import { IWidget } from "../interfaces/core/widget.interface";

export class Container implements IContainer {
    type = 'container';
    padding?: number;
    data: {
        backgroundColor?: IColor;
        child?: IWidget;
    };
    constructor( o : {backgroundColor?: IColor, child?: IWidget}, padding?: number) {
        this.data = o;
        this.padding = padding;
    }
    
}