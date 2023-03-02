package com.revature.service;

import java.util.Optional;

import com.revature.model.User;
import com.revature.repository.UserRepository;

public class UserService {
    private UserRepository repository = new UserRepository();

    public boolean save(User user) {
        User foundUser = repository.findUser(user);
        if (foundUser.getEmail() == null) {
            repository.save(user);
            return true;
        } else
            return false;
    }

    public Optional<User> findUser(User user) {
        User foundUser = repository.findUser(user);

        if (foundUser.getEmail() != null) {
            if (foundUser.getPassword().equals(user.getPassword())) {
                return Optional.of(foundUser);
            } else {
                return Optional.ofNullable(null);
            }
        } else {
            return Optional.ofNullable(null);
        }
    }

    public User updateUser(User user) {
        User foundUser = repository.findUser(user);
        if (!user.getFname().isEmpty()) {
            if (!user.getFname().equals(foundUser.getFname())) {
                repository.updateUser(foundUser.getId(), "fname", user.getFname());
                foundUser.setFname(user.getFname());
            }
        }

        if (!user.getLname().isEmpty()) {
            if (!user.getLname().equals(foundUser.getLname())) {
                repository.updateUser(foundUser.getId(), "lname", user.getLname());
                foundUser.setLname(user.getLname());
            }
        }

        if (!user.getAddress().isEmpty()) {
            if (!user.getAddress().equals(foundUser.getAddress())) {
                repository.updateUser(foundUser.getId(), "address", user.getAddress());
                foundUser.setAddress(user.getAddress());
            }
        }

        return foundUser;
    }
}
