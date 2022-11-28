import { TextAligment } from "../enum/text-alignment.enum";
import { IColor } from "./core/color.interface";
import { IWidget } from "./core/widget.interface";

export interface ILabel extends IWidget{
    data: {
        padding?: number;
        text: string;
        textColor?: IColor;
        aligment?: TextAligment;
    }
    
}