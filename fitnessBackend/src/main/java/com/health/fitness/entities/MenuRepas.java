package com.health.fitness.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "menurepas")
@AssociationOverrides({
        @AssociationOverride(name = "idMenuRepas.repas", joinColumns = @JoinColumn(name = "idRepas")),
        @AssociationOverride(name = "idMenuRepas.menu", joinColumns = @JoinColumn(name = "idmenus"))})
public class MenuRepas implements Serializable {
    @EmbeddedId
    private MenuRepasId idMenuRepas = new MenuRepasId();
    private int orders;

    public MenuRepasId getIdMenuRepas() {
        return idMenuRepas;
    }

    public void setIdMenuRepas(MenuRepasId idMenuRepas) {
        this.idMenuRepas = idMenuRepas;
    }

    public int getOrders() {
        return orders;
    }

    public void setOrders(int orders) {
        this.orders = orders;
    }
}
