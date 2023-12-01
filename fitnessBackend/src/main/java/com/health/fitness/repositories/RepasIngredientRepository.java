package com.health.fitness.repositories;

import com.health.fitness.entities.RepasIngredient;
import com.health.fitness.entities.RepasIngredientId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RepasIngredientRepository extends JpaRepository<RepasIngredient, RepasIngredientId> {
    public RepasIngredient findByIdRepasIngredientRepasIdRepasAndIdRepasIngredientIngredientIdIngredient(int a, int b);
    @Modifying
    @Query(value = "delete from repasingredient where repas_idrepas =?1 and ingredient_idingredient =?2", nativeQuery = true)
    public void deleteassociations(int a, int b);

    //public RepasIngredient findByIdRepasIngredient(int idRepasIngredient);
}
