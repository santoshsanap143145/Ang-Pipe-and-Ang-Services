

export interface Iproduct {
    pname: string;
    pdetails: string;
    pid: string;
    pstatus: ProductsStatus;
}


export enum ProductsStatus {
    InProgress = "InProgress",
    Dispatched = "Dispatched",
    Delivered = "Delivered"
}