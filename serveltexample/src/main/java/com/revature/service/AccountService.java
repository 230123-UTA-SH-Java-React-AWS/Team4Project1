package com.revature.service;

import java.util.List;

import com.revature.model.Account;
import com.revature.model.User;
import com.revature.repository.AccountRepository;

public class AccountService {
    private AccountRepository repository = new AccountRepository();

    public void saveAccount(Account account) {
        repository.saveAccount(account);
    }

    public List<Account> getAllAccounts(User user) {
        return repository.getAllAccounts(user);
    }
}
