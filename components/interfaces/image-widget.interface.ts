import { IWidget } from "./core/widget.interface";

export interface IImage extends IWidget{
    data: {
        path?: string;
        url?: string;
    }
    
}