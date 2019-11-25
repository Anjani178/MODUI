export class Payment {
    public PaymentId
    public Uid  
    public Mid
    public TId
    public Amount
    public AmountMentor
    constructor(){
        this.PaymentId= "P" + Math.round((Math.random()*9000));
}
}
