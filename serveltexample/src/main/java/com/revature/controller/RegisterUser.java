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

import com.revature.model.User;
import com.revature.service.UserService;
import com.sun.net.httpserver.HttpExchange;

public class RegisterUser implements HttpHandler {

    private void optionsRequest(HttpExchange exchange) {
        try {
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");

            exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "OPTIONS, POST");

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
            User user = mapper.readValue(stringBuilder.toString(), User.class);
            UserService service = new UserService();
            if (service.save(user)) {
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
            case "POST":
                postRequest(exchange);
                break;
            default:
                break;
        }
    }

}
