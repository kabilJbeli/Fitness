package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.type.LocalDateType;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import java.io.Serializable;
import java.time.LocalDateTime;

@Embeddable
public class MenuRepasId implements Serializable {
    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties({ "repasmenu", "menurepas" })
    private Repas repas;
    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties({ "repasmenu", "menurepas" })
    private Menu menu;
    @Override
    public int hashCode() {
        return super.hashCode();
    }
    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    public Repas getRepas() {
        return repas;
    }

    public void setRepas(Repas repas) {
        this.repas = repas;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }

}
