import { TextAligment } from "../enum/text-alignment.enum";
import { IColor } from "../interfaces/core/color.interface";
import { ILabel } from "../interfaces/label-widget.interface";

export class Label implements ILabel {
    type = 'label';
    padding?: number;
    data: {
        text: string;
        textColor?: IColor;
        aligment?: TextAligment;
    };
    constructor( o : {text: string, textColor?: IColor, aligment?: TextAligment}, padding?: number) {
        this.data = o;
        this.padding = padding;
    }
    
}