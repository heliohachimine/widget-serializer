
import { IWidget } from "./core/widget.interface";

export interface IColunm extends IWidget{
    data: {
        children?: IWidget[];
    }
    
}