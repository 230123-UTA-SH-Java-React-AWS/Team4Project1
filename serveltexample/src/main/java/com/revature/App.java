package com.revature;

import com.revature.controller.UserProfile;
import com.revature.controller.AccountTransactions;
import com.revature.controller.TransferFunds;
import com.revature.controller.UserAccounts;
import com.revature.controller.UserLogin;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

/**
 * Hello world!
 */
public final class App {
    private static final int PORT = 8000;

    private App() {
    }

    /**
     * Says hello to the world.
     * 
     * @param args The arguments of the program.
     */
    public static void main(String[] args) {
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

            server.createContext("/login", new UserLogin());
            server.createContext("/accounts", new UserAccounts());
            server.createContext("/profile", new UserProfile());
            server.createContext("/accounts/new-account", new UserAccounts());
            server.createContext("/accounts/transactions", new AccountTransactions());
            server.createContext("/accounts/transactions/new-transaction", new AccountTransactions());
            server.createContext("/accounts/transactions/transfer-funds", new TransferFunds());

            server.setExecutor(null);
            server.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
