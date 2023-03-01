package com.revature.service;

import java.util.List;

import com.revature.model.Account;
import com.revature.model.Transaction;
import com.revature.repository.TransactionRepository;

public class TransactionService {
    private TransactionRepository repository = new TransactionRepository();

    public void saveTransaction(Transaction transaction) {
        repository.saveTransaction(transaction);
    }

    public List<Transaction> getAllAccounts(Account account) {
        return repository.getAllAccounts(account);
    }
}
