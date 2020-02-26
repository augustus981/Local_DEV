package com.bosch.dee.onboarding.data;

public class UserData {

    private long id;
    private final String name;
    private final String email;
    
    public UserData() {
        this.name = "";
        this.email = "";
    }
    
    public UserData(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public long getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
    
    @Override
    public String toString() {
        return "User{" + "id=" + id + ", name=" + name + ", email=" + email + '}';
    }
}
