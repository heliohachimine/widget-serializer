
import { IWidget } from "../interfaces/core/widget.interface";
import { IRow } from "../interfaces/row-widget.interface";

export class Row implements IRow {
    type = 'row';
    padding?: number;
    data: {
        children?: IWidget[];
    };
    constructor( o : {children?: IWidget[]}, padding?: number) {
        this.data = o;
        this.padding = padding;
    }
    
}