import { IColor } from "./core/color.interface";
import { IWidget } from "./core/widget.interface";

export interface IContainer extends IWidget{
    data: {
        backgroudColor?: IColor;
        child?: IWidget;
    }
    
}