package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "repasingredient")
public class RepasIngredient implements Serializable {
    @EmbeddedId
    private RepasIngredientId idRepasIngredient = new RepasIngredientId();
    private double poids;

    public RepasIngredientId getIdRepasIngredient() {
        return idRepasIngredient;
    }

    public void setIdRepasIngredient(RepasIngredientId idRepasIngredient) {
        this.idRepasIngredient = idRepasIngredient;
    }

    public double getPoids() {
        return poids;
    }

    public void setPoids(double poids) {
        this.poids = poids;
    }
}
