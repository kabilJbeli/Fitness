package com.health.fitness.repositories;

import com.health.fitness.entities.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends JpaRepository <Ingredient, Integer> {

    Ingredient findByIdIngredient(int idIngredient);
}
