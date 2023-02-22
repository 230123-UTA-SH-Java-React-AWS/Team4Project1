package com.revature.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.revature.model.Account;
import com.revature.model.User;
import com.revature.util.ConnectionUtil;

public class AccountRepository {
    public void saveAccount(Account account) {
        String sql = "INSERT INTO accounts (user_id, account_name, balance, account_type) VALUES (?, ?, ?, ?)";

        try (Connection connection = ConnectionUtil.getConnection()) {
            PreparedStatement prstmt = connection.prepareStatement(sql);
            prstmt.setInt(1, account.getUserId());
            prstmt.setString(2, account.getName());
            prstmt.setFloat(3, account.getBalance());
            if (account.getType().equals("CHECKING")) {
                prstmt.setInt(4, 1);
            } else
                prstmt.setInt(4, 2);

            prstmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Account> getAllAccounts(User user) {
        String sql = "SELECT * FROM accounts WHERE user_id = " + user.getId();
        List<Account> accounts = new ArrayList<Account>();

        try (Connection connection = ConnectionUtil.getConnection()) {
            Statement stmt = connection.createStatement();

            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                Account newAccount = new Account();
                newAccount.setId(rs.getInt(1));
                newAccount.setUserId(rs.getInt(2));
                newAccount.setName(rs.getString(3));
                newAccount.setBalance(rs.getFloat(4));
                if (rs.getInt(5) == 1) {
                    newAccount.setType("CHECKING");
                } else
                    newAccount.setType("SAVINGS");

                accounts.add(newAccount);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return accounts;
    }
}
