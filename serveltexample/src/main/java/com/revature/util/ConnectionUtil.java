package com.revature.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionUtil {
    private static Connection connection;

    private ConnectionUtil() {
        connection = null;
    }

    public static Connection getConnection() {
        try {
            if (connection != null && !connection.isClosed()) {
                return connection;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        // String url = System.getenv("url"),
        //         user = System.getenv("user"),
        //         password = System.getenv("password");

        try {
            connection = DriverManager.getConnection("jdbc:postgresql://ls-3009ba528ea2cf4d9dee0625f762224ed6d5cb96.cspmhkft7u9w.us-east-1.rds.amazonaws.com:5432/postgres", "team4", "Testdbtest!");
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return connection;
    }
}
