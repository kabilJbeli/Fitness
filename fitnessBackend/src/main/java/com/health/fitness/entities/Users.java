package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.health.fitness.enums.Genre;
import com.health.fitness.enums.ObjectifClient;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.engine.jdbc.Size;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(indexes = {
        @Index(name = "fn_indexkey", columnList = "keycloackuid", unique = true),
        @Index(name = "fn_indexuser", columnList = "username" , unique = true)})
@Cacheable
public class Users implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idusers;
	private String keycloackuid;
	private String username;
    private String name;
    private String surname;
    private String role;
    private boolean enabled;
    private LocalDate datetimecreation;
    private LocalDate datetimelastupdate;
	private String phone;
    private LocalDate birthdate;
    private Integer age;
    private Integer taille;
    private Double poid;
    private Genre genre;
    private int daysworkout;
    private boolean workouthome;
    private boolean allergie;
    @Column(length = 1000)
    private String allergiedescription;
    private boolean sick;
    @Column(length = 1000)
    private String sickdescription;
    @Column(length = 2000)
    private String foodrequirements;

    @OneToMany(mappedBy = "client", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<Pictures> picturesList;
    private ObjectifClient objectif;
    @OneToOne(mappedBy = "coach", cascade = CascadeType.ALL)
	private Pictures pictures;
    @OneToMany(mappedBy = "iduserpackage.clientpackage", cascade = CascadeType.ALL)
    @Column(name = "userpackage")
	private List<UserPackage> userpackage;
    @OneToMany(mappedBy = "idExerciceClient.client")
    private List<ExerciceSportifClient> clientexercice;
    @OneToMany(mappedBy = "idclientMenu.client")
    @Column(name = "clientmenu")
    private List<ClientMenu> menuclient;

    public Integer getIdusers() {
        return idusers;
    }

    public void setIdusers(Integer idusers) {
        this.idusers = idusers;
    }

    public String getKeycloackuid() {
        return keycloackuid;
    }

    public void setKeycloackuid(String keycloackuid) {
        this.keycloackuid = keycloackuid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setIdusers(int idusers) {
        this.idusers = idusers;
    }

    public LocalDate getDatetimecreation() {
        return datetimecreation;
    }

    public void setDatetimecreation(LocalDate datetimecreation) {
        this.datetimecreation = datetimecreation;
    }

    public LocalDate getDatetimelastupdate() {
        return datetimelastupdate;
    }

    public void setDatetimelastupdate(LocalDate datetimelastupdate) {
        this.datetimelastupdate = datetimelastupdate;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getTaille() {
        return taille;
    }

    public void setTaille(Integer taille) {
        this.taille = taille;
    }

    public Double getPoid() {
        return poid;
    }

    public void setPoid(Double poid) {
        this.poid = poid;
    }

    public List<Pictures> getPicturesList() {
        return picturesList;
    }

    public void setPicturesList(List<Pictures> picturesList) {
        this.picturesList = picturesList;
    }

    public ObjectifClient getObjectif() {
        return objectif;
    }

    public void setObjectif(ObjectifClient objectif) {
        this.objectif = objectif;
    }

    public Pictures getPictures() {
        return pictures;
    }
    public void setPictures(Pictures pictures) {
        this.pictures = pictures;
    }

    public List<UserPackage> getUserpackage() {
        return userpackage;
    }

    public void setUserpackage(List<UserPackage> userpackage) {
        this.userpackage = userpackage;
    }
    public List<ExerciceSportifClient> getClientexercice() {
        return clientexercice;
    }
    public void setClientexercice(List<ExerciceSportifClient> clientexercice) {
        this.clientexercice = clientexercice;
    }
    public List<ClientMenu> getMenuclient() {
        return menuclient;
    }
    public void setMenuclient(List<ClientMenu> menuclient) {
        this.menuclient = menuclient;
    }
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
    public Genre getGenre() {
        return genre;
    }
    public void setGenre(Genre genre) {
        this.genre = genre;
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

    public boolean isWorkouthome() {
        return workouthome;
    }

    public void setWorkouthome(boolean workouthome) {
        this.workouthome = workouthome;
    }
}
