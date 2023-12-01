package com.health.fitness.services;

import com.health.fitness.entities.Ingredient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IngredientServices {
	boolean createIngredient(Ingredient ingredient);

	boolean updateIngredient(Ingredient ingredient);

	Ingredient findIngredient(int idIngredient);

	List<Ingredient> findIngredients();

	void deleteIngredient(int idIngredient);
}
