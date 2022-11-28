import { IWidget } from "./core/widget.interface";

export interface IRow extends IWidget{
    data: {
        children?: IWidget[];
    }
    
}