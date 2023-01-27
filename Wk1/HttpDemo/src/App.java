import java.net.InetSocketAddress;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Queue;

import com.sun.net.httpserver.HttpServer;

import controllers.AnotherController;
import controllers.Controller;

public class App {
    public static void main(String[] args) throws Exception {
        //Starting our backend server to enable it to start receiving and responding to requests
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);

        //This will provide a specific URL that will point to our Controller
        server.createContext("/", new Controller());
        server.createContext("/anotherController", new AnotherController());

        server.setExecutor(null); //Extra configuration for your server
        server.start(); //starts your backend server

        List<Integer> obj = new ArrayList<>();
        Queue
    }
}