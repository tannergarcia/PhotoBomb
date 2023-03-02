export class Warning {
    id?: string;
    type?: WarningTypes;
    content?: string;
    closing?: boolean;
    static_route?: boolean;
    fade?: boolean;

    constructor(init?:Partial<Warning>) {
        Object.assign(this, init);
    }
}

export enum WarningLabels {
    Good,
    Bad,
    Info,
    Between
}

export class WarningOptions {
    id?: string;
    closing?: boolean;
    static_route?: boolean;
}

export enum WarningTypes {
    Green,
    Red,
    Blue,
    Yellow
}

export class options {
    id?: string;
    token?: string;
    userValue?: string;

}