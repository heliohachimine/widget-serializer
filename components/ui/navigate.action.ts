
import { TypeAction } from "../enum/type-action.enum";
import { IAction } from "../interfaces/core/action.interface";

export class NavigateAction implements IAction {
    type = TypeAction.Navigate;
    route?: string;
    data: any;
    constructor( route?: string, data?: any) {
        this.data = data;
        this.route = route;
    }
}