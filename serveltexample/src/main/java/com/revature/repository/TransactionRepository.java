package com.revature.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.revature.model.Account;
import com.revature.model.Transaction;
import com.revature.util.ConnectionUtil;

public class TransactionRepository {
    public void saveTransaction(Transaction transaction) {
        String sql = "INSERT INTO transactions (account_id, amount, transaction_type) VALUES (?, ?, ?)";

        try (Connection connection = ConnectionUtil.getConnection()) {
            PreparedStatement prstmt = connection.prepareStatement(sql);
            prstmt.setInt(1, transaction.getAccountId());
            prstmt.setFloat(2, transaction.getAmount());
            if (transaction.getType().equals("INCOME")) {
                prstmt.setInt(3, 1);
            } else
                prstmt.setInt(3, 2);

            prstmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Transaction> getAllAccounts(Account account) {
        String sql = "SELECT * FROM transactions WHERE account_id = " + account.getId();
        List<Transaction> transactions = new ArrayList<Transaction>();

        try (Connection connection = ConnectionUtil.getConnection()) {
            Statement stmt = connection.createStatement();

            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                Transaction newTransaction = new Transaction();
                newTransaction.setId(rs.getInt(1));
                newTransaction.setAccountId(rs.getInt(2));
                newTransaction.setAmount(rs.getFloat(3));
                if (rs.getInt(4) == 1) {
                    newTransaction.setType("INCOME");
                } else
                    newTransaction.setType("EXPENSE");

                transactions.add(newTransaction);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return transactions;
    }
}
