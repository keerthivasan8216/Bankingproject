package org.example;

import org.springframework.stereotype.Component;

@Component("creditCard")
public class CreditCardPayment implements PaymentService {

    @Override
    public void pay() {
        System.out.println("Payment done using Credit Card");
    }
}
