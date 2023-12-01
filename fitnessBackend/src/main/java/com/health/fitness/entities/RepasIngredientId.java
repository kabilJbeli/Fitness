package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class RepasIngredientId implements Serializable {
    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties({ "ingredientsrepas", "repasIngredients" })
    private Repas repas;
    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties({ "ingredientsrepas", "repasIngredients" })
    private Ingredient ingredient;

    @Override
    public int hashCode() {
        return Objects.hash(repas.getIdRepas(), ingredient.getIdIngredient());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass())
            return false;

        RepasIngredientId that = (RepasIngredientId) o;
        return Objects.equals(repas.getIdRepas(), that.getRepas().getIdRepas()) &&
                Objects.equals(ingredient.getIdIngredient(), that.getIngredient().getIdIngredient());
    }


    public Repas getRepas() {
        return repas;
    }

    public void setRepas(Repas repas) {
        this.repas = repas;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }
}
