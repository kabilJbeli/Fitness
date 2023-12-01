package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "clientmenu")
public class ClientMenu {
    @EmbeddedId
    private ClientMenuId idclientMenu = new ClientMenuId();
    private LocalDate affectdate = LocalDate.now();

    public ClientMenuId getIdclientMenu() {
        return idclientMenu;
    }

    public void setIdclientMenu(ClientMenuId idclientMenu) {
        this.idclientMenu = idclientMenu;
    }

    public LocalDate getAffectdate() {
        return affectdate;
    }

    public void setAffectdate(LocalDate affectdate) {
        this.affectdate = affectdate;
    }
}
