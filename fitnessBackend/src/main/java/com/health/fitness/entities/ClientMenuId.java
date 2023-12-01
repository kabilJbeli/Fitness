package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import java.io.Serializable;
import java.time.LocalDate;

@Embeddable
public class ClientMenuId implements Serializable {
    @ManyToOne
    @JsonIgnoreProperties({ "menuclient", "clientmenu", "ingredientsrepas", "repasIngredients", "menurepas", "picturesList", "userpackage" })
    private Users client;
    @ManyToOne
    @JsonIgnoreProperties({ "menuclient", "clientmenu", "ingredientsrepas", "repasIngredients", "menurepas" })
    private Menu menu;
    private LocalDate datemenu;

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }
    @Override
    public int hashCode() {
        return super.hashCode();
    }

    public Users getClient() {
        return client;
    }

    public void setClient(Users client) {
        this.client = client;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }

    public LocalDate getDatemenu() {
        return datemenu;
    }

    public void setDatemenu(LocalDate datemenu) {
        this.datemenu = datemenu;
    }
}
