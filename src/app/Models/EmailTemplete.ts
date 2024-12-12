export interface EmailTemplate{
    name:string;
    email:string;
    emailType:emailType;
}

export enum emailType{
    None = 0,
    Accept,
    Deactive,
    PaymentNotification,
}