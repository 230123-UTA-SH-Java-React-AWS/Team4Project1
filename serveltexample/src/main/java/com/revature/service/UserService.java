package com.revature.service;

import com.revature.model.User;
import com.revature.repository.UserRepository;

public class UserService {
    private UserRepository repository = new UserRepository();

    public boolean updateUser(User user) {
        User foundUser = repository.findUser(user);
        if (foundUser.getEmail() != null) {
            if (user.getFname() != null) {
                if (!user.getFname().equals(foundUser.getFname())) {
                    repository.updateUser(foundUser.getId(), "fname", user.getFname());
                }
            }

            if (user.getLname() != null) {
                if (!user.getLname().equals(foundUser.getLname())) {
                    repository.updateUser(foundUser.getId(), "lname", user.getLname());
                }
            }

            if (user.getAddress() != null) {
                if (!user.getAddress().equals(foundUser.getAddress())) {
                    repository.updateUser(foundUser.getId(), "address", user.getAddress());
                }
            }

            if (user.getUsername() != null) {
                if (!user.getUsername().equals(foundUser.getUsername())) {
                    repository.updateUser(foundUser.getId(), "username", user.getUsername());
                }
            }

            if (user.getEmail() != null) {
                if (!user.getEmail().equals(foundUser.getEmail())) {
                    repository.updateUser(foundUser.getId(), "email", user.getEmail());
                }
            }

            if (user.getPassword() != null) {
                if (!user.getPassword().equals(foundUser.getPassword())) {
                    repository.updateUser(foundUser.getId(), "pass", user.getPassword());
                }
            }
        } else {
            return false;
        }
        return true;
    }
}
