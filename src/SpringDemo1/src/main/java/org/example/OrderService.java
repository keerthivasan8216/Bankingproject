package org.example;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class OrderService {

    private final PaymentService paymentService;


    public OrderService(
            @Qualifier("debitCard") PaymentService paymentService) {

        this.paymentService = paymentService;
    }


    public void placeOrder() {

        System.out.println("Order placed");

        paymentService.pay();
    }
}
