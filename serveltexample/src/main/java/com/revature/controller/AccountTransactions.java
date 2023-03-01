package com.revature.controller;

import com.sun.net.httpserver.HttpHandler;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;

import com.revature.model.Account;
import com.revature.model.Transaction;
import com.revature.service.AccountService;
import com.revature.service.TransactionService;
import com.sun.net.httpserver.HttpExchange;

public class AccountTransactions implements HttpHandler {
    private TransactionService service = new TransactionService();

    private void optionsRequest(HttpExchange exchange) {
        try {
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");

            exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "OPTIONS, POST, PUT");

            exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "*");

            exchange.sendResponseHeaders(202, -1);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void postRequest(HttpExchange exchange) {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");

        InputStream is = exchange.getRequestBody();
        StringBuilder stringBuilder = new StringBuilder();
        ObjectMapper mapper = new ObjectMapper();
        try (Reader reader = new BufferedReader(
                new InputStreamReader(is, Charset.forName(StandardCharsets.UTF_8.name())))) {

            int c = 0;
            while ((c = reader.read()) != -1) {
                stringBuilder.append((char) c);
            }
            Account account = mapper.readValue(stringBuilder.toString(), Account.class);
            List<Transaction> transactions = service.getAllAccounts(account);

            String response = mapper.writeValueAsString(transactions);
            OutputStream os = exchange.getResponseBody();
            exchange.sendResponseHeaders(200, response.getBytes().length);
            os.write(response.getBytes());
            os.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void putRequest(HttpExchange exchange) {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");

        InputStream is = exchange.getRequestBody();
        StringBuilder stringBuilder = new StringBuilder();
        ObjectMapper mapper = new ObjectMapper();
        try (Reader reader = new BufferedReader(
                new InputStreamReader(is, Charset.forName(StandardCharsets.UTF_8.name())))) {

            int c = 0;
            while ((c = reader.read()) != -1) {
                stringBuilder.append((char) c);
            }
            Transaction transaction = mapper.readValue(stringBuilder.toString(), Transaction.class);

            Account account = new Account();
            account.setId(transaction.getAccountId());
            AccountService accountService = new AccountService();
            account = accountService.findAccount(account);

            if (transaction.getType().equals("INCOME")) {
                account.setBalance(account.getBalance() + transaction.getAmount());
                accountService.updateAccount(account);
                service.saveTransaction(transaction);
                exchange.sendResponseHeaders(200, -1);
            } else {
                account.setBalance(account.getBalance() - transaction.getAmount());
                if (accountService.updateAccount(account)) {
                    service.saveTransaction(transaction);
                    exchange.sendResponseHeaders(200, -1);
                } else {
                    exchange.sendResponseHeaders(400, -1);
                }
            }
            exchange.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void handle(HttpExchange exchange) {
        String verb = exchange.getRequestMethod();

        switch (verb) {
            case "OPTIONS":
                optionsRequest(exchange);
                break;
            case "POST":
                postRequest(exchange);
                break;
            case "PUT":
                putRequest(exchange);
                break;
            default:
                break;
        }
    }
}
