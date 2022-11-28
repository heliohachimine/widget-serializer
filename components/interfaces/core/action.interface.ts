import { TypeAction } from "../../enum/type-action.enum";

export interface IAction {
    type: TypeAction;
    data?: any;
}
