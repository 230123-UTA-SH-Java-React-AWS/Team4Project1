import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpServer;

import controllers.Controller;

public class App {
    public static void main(String[] args) throws Exception {
        //Starting our backend server to enable it to start receiving and responding to requests
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);

        //This will provide a specific URL that will point to our Controller
        server.createContext("/someUrl", new Controller());

        server.setExecutor(null); //Extra configuration for your server
        server.start(); //starts your backend server
    }
}
