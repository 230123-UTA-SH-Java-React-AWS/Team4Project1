package com.revature.controller;

import com.sun.net.httpserver.HttpHandler;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

import org.codehaus.jackson.map.ObjectMapper;

import com.revature.model.Account;
import com.revature.model.Transaction;
import com.revature.service.AccountService;
import com.revature.model.TransferFundsModel;
import com.revature.service.TransactionService;
import com.sun.net.httpserver.HttpExchange;

public class TransferFunds implements HttpHandler {
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
            TransferFundsModel transferFunds = mapper.readValue(stringBuilder.toString(), TransferFundsModel.class);

            Account sourceAccount = new Account();
            sourceAccount.setId(transferFunds.getId());
            AccountService accountService = new AccountService();
            sourceAccount = accountService.findAccount(sourceAccount);

            sourceAccount.setBalance(sourceAccount.getBalance() - transferFunds.getAmount());
            if (accountService.updateAccount(sourceAccount)) {
                Transaction sourceTransaction = new Transaction();
                sourceTransaction.setAccountId(sourceAccount.getId());
                sourceTransaction.setAmount(transferFunds.getAmount());
                sourceTransaction.setType("EXPENSE");
                service.saveTransaction(sourceTransaction);

                Account destinationAccount = new Account();
                destinationAccount.setId(transferFunds.getDestinationAccountId());
                destinationAccount = accountService.findAccount(destinationAccount);
                destinationAccount.setBalance(destinationAccount.getBalance() + transferFunds.getAmount());
                accountService.updateAccount(destinationAccount);

                Transaction destinationTransaction = new Transaction();
                destinationTransaction.setAccountId(destinationAccount.getId());
                destinationTransaction.setAmount(transferFunds.getAmount());
                destinationTransaction.setType("INCOME");
                service.saveTransaction(destinationTransaction);

                exchange.sendResponseHeaders(200, -1);
            } else {
                exchange.sendResponseHeaders(400, -1);
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
            case "PUT":
                putRequest(exchange);
                break;
            default:
                break;
        }
    }
}
