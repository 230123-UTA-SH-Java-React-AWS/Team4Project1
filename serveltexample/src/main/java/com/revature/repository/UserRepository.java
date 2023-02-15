package com.revature.repository;

import com.revature.model.User;
import com.revature.util.ConnectionUtil;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserRepository {
    public User findUser(User user) {
        String sql = "SELECT * FROM users WHERE email = \'" + user.getEmail() + "\'";
        User foundUser = new User();

        try (Connection connection = ConnectionUtil.getConnection()) {
            Statement stmt = connection.createStatement();

            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                foundUser.setId(rs.getInt(1));
                foundUser.setFname(rs.getString(2));
                foundUser.setLname(rs.getString(3));
                foundUser.setAddress(rs.getString(4));
                foundUser.setUsername(rs.getString(5));
                foundUser.setEmail(rs.getString(6));
                foundUser.setPassword(rs.getString(7));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return foundUser;
    }

    public void updateUser(int userID, String atribute, String value) {
        String sql = "UPDATE users SET " + atribute + " = ? WHERE id = ?";

        try (Connection connection = ConnectionUtil.getConnection()) {
            PreparedStatement prstmt = connection.prepareStatement(sql);

            prstmt.setString(1, value);
            prstmt.setInt(2, userID);

            prstmt.execute();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
