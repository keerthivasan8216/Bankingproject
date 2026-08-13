import { Router } from "express";
import { AccountController } from "../controllers/accountController";

const router = Router();

const accountController = new AccountController();

router.post("/deposit", (req, res) => {
    const { amount } = req.body;

    accountController.deposit(amount);

    res.json({
        message: "Deposit completed successfully"
    });
});

router.post("/withdraw", (req, res) => {
    const { amount } = req.body;

    accountController.withdraw(amount);

    res.json({
        message: "Withdrawal completed successfully"
    });
});

export default router;