import { IColunm } from "../interfaces/column-widget.interface";
import { IWidget } from "../interfaces/core/widget.interface";

export class Column implements IColunm {
    type = 'column';
    padding?: number;
    data: {
        children?: IWidget[];
    };
    constructor( o : {children?: IWidget[]}, padding?: number) {
        this.data = o;
        this.padding = padding;
    }
    
}