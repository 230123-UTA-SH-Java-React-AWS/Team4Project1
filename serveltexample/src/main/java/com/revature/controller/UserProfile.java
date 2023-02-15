package com.revature.controller;

import com.sun.net.httpserver.HttpHandler;

import java.io.BufferedReader;
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

    private void putRequest(HttpExchange exchange) {
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

            String response = "Good Request";
            OutputStream os = exchange.getResponseBody();

            if (service.updateUser(user)) {
                exchange.sendResponseHeaders(200, response.getBytes().length);
                os.write(response.getBytes());
            } else {
                exchange.sendResponseHeaders(400, response.getBytes().length);
                os.write(response.getBytes());
            }
            os.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void handle(HttpExchange exchange) {
        String verb = exchange.getRequestMethod();

        switch (verb) {
            case "PUT":
                putRequest(exchange);
                break;
            default:
                break;
        }
    }
}
