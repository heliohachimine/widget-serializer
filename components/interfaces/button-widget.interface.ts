import { IAction } from "./core/action.interface";
import { IWidget } from "./core/widget.interface";

export interface IButton  extends IWidget{
    data: {
        text?: string;
        action: IAction;
    }
}