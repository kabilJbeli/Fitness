package com.health.fitness.Utility;

import com.health.fitness.entities.Pictures;

import java.time.LocalDate;
import java.util.List;

public class Userglobal {
    private String name;
    private String surname;
    private LocalDate birthdate;
    private String password;
    private String email;
    private String role;
    private String phone;
    private String keycloakkey;
    private boolean enabled;
    private String newpassword;
    private Integer taille;
    private Double poids;
    private Integer objectif;
    private Integer age;
    private List<Pictures> pictures;
    private Pictures coachpic;
    private byte[] coachpicout;
    private com.health.fitness.entities.Package packages;
    private int daysworkout;
    private boolean allergie;
    private String allergiedescription;
    private boolean sick;
    private String sickdescription;
    private String foodrequirements;
    private boolean workouthome;
    private String gender;
    public Userglobal(){}
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getSurname() {
        return surname;
    }
    public void setSurname(String surname) {
        this.surname = surname;
    }
    public LocalDate getBirthdate() {
        return birthdate;
    }
    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getKeycloakkey() {
        return keycloakkey;
    }
    public void setKeycloakkey(String keycloakkey) {
        this.keycloakkey = keycloakkey;
    }
    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
    public boolean isEnabled() {
        return enabled;
    }
    public String getNewpassword() {
        return newpassword;
    }
    public void setNewpassword(String newpassword) {
        this.newpassword = newpassword;
    }
    public Integer getTaille() {
        return taille;
    }
    public void setTaille(Integer taille) {
        this.taille = taille;
    }
    public Integer getObjectif() {
        return objectif;
    }
    public void setObjectif(Integer objectif) {
        this.objectif = objectif;
    }
    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }
    public List<Pictures> getPictures() {
        return pictures;
    }
    public void setPictures(List<Pictures> pictures) {
        this.pictures = pictures;
    }
    public void setPoids(Double poids) {
        this.poids = poids;
    }
    public Double getPoids() {
        return poids;
    }
    public void setCoachpic(Pictures coachpic) {
        this.coachpic = coachpic;
    }
    public Pictures getCoachpic() {
        return coachpic;
    }
    public byte[] getCoachpicout() {
        return coachpicout;
    }
    public void setCoachpicout(byte[] coachpicout) {
        this.coachpicout = coachpicout;
    }
    public com.health.fitness.entities.Package getPackages() {
        return packages;
    }
    public void setPackages(com.health.fitness.entities.Package packages) {
        this.packages = packages;
    }
    public int getDaysworkout() {
        return daysworkout;
    }
    public void setDaysworkout(int daysworkout) {
        this.daysworkout = daysworkout;
    }
    public boolean isAllergie() {
        return allergie;
    }
    public void setAllergie(boolean allergie) {
        this.allergie = allergie;
    }
    public String getAllergiedescription() {
        return allergiedescription;
    }
    public void setAllergiedescription(String allergiedescription) {
        this.allergiedescription = allergiedescription;
    }
    public boolean isSick() {
        return sick;
    }
    public void setSick(boolean sick) {
        this.sick = sick;
    }
    public String getSickdescription() {
        return sickdescription;
    }
    public void setSickdescription(String sickdescription) {
        this.sickdescription = sickdescription;
    }
    public String getFoodrequirements() {
        return foodrequirements;
    }
    public void setFoodrequirements(String foodrequirements) {
        this.foodrequirements = foodrequirements;
    }
    public void setWorkouthome(boolean workouthome) {
        this.workouthome = workouthome;
    }

    public boolean isWorkouthome() {
        return workouthome;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
}
