package com.revature.model;

public class Transaction {
    private int id;
    private int accountId;
    private float amount;
    private String type;

    public Transaction() {
        super();
    }

    public Transaction(int id, int accountId, float amount, String type) {
        this.id = id;
        this.accountId = accountId;
        this.amount = amount;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
