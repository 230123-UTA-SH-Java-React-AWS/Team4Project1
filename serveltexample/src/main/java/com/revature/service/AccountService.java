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

    public boolean updateAccount(Account account) {

        if (account.getBalance() >= 0) {
            repository.updateAccount(account.getId(), "balance", account.getBalance());
            return true;
        } else
            return false;
    }

    public Account findAccount(Account account) {
        return repository.findAccount(account);
    }

    public List<Account> getAllAccounts(User user) {
        return repository.getAllAccounts(user);
    }
}
