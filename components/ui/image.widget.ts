import { IImage } from "../interfaces/image-widget.interface";

export class Image implements IImage {
    type = 'image';
    padding?: number;
    data: {
        path?: string;
        url?: string;
    };
    constructor( o : {path?: string, url?: string}, padding?: number) {
        this.data = o;
        this.padding = padding;
    }
    
}