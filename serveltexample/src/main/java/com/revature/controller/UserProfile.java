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

import org.codehaus.jackson.map.ObjectMapper;

import com.revature.model.User;
import com.revature.service.UserService;
import com.sun.net.httpserver.HttpExchange;

public class UserProfile implements HttpHandler {
    private UserService service = new UserService();

    private void optionsRequest(HttpExchange exchange) {
        try {
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");

            exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "OPTIONS, PUT");

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
            User user = mapper.readValue(stringBuilder.toString(), User.class);

            String response;
            OutputStream os = exchange.getResponseBody();
            User foundUser = service.updateUser(user);

            response = mapper.writeValueAsString(foundUser);
            exchange.sendResponseHeaders(200, response.getBytes().length);
            os.write(response.getBytes());
            os.close();

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
