import { IButton } from "../interfaces/button-widget.interface";
import { IAction } from "../interfaces/core/action.interface";

export class Button implements IButton {
    type = 'button';
    padding?: number;
    data: {
        text?: string;
        action: IAction;
    };
    constructor( o : {text?: string, action: IAction}, padding?: number) {
        this.data = o;
        this.padding = padding;
    }
    
}