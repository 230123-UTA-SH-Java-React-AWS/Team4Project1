package controllers;
import java.io.IOException;
import java.io.OutputStream;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
//This is the class that will have a bunch of methods that will be executed by your requests
//
public class Controller implements HttpHandler{

    //Handle method will execute once I receive the right request
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        // TODO Auto-generated method stub
        String someResponse = "Hello world I just sent a response using strings!";

        //Creating a response
        //First parameter of sendResponseHeaders() is the status code we want to deliver
        //Second parameter will be the size of the message we are giving
        exchange.sendResponseHeaders(200, someResponse.getBytes().length);

        //We have to save the string into a class that httpserver understands
        OutputStream os = exchange.getResponseBody();
        os.write(someResponse.getBytes()); //Writing inside of the response body
        os.close(); //Save and close our written bytecode
    }
    
}
