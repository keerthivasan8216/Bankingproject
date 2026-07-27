package org.example;

import org.springframework.stereotype.Component;

@Component("debitCard")
public class DebitCardPayment implements PaymentService {

    @Override
    public void pay() {
        System.out.println("Payment done using Debit Card");
    }
}
