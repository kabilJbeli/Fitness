package com.health.fitness.servicesImp;

import com.health.fitness.entities.Ingredient;
import com.health.fitness.repositories.IngredientRepository;
import com.health.fitness.services.IngredientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientServiceImp implements IngredientServices {

	@Autowired
	IngredientRepository ingredientRepository;

	@Override
	public boolean createIngredient(Ingredient ingredient) {
		return ingredientRepository.save(ingredient) != null;
	}

	@Override
	public boolean updateIngredient(Ingredient ingredient) {
		return ingredientRepository.save(ingredient) != null;
	}

	@Override
	public Ingredient findIngredient(int idIngredient) {
		return ingredientRepository.findByIdIngredient(idIngredient);
	}

	@Override
	public List<Ingredient> findIngredients() {
		return ingredientRepository.findAll();
	}

	@Override
	public void deleteIngredient(int idIngredient) {
		ingredientRepository.deleteById(idIngredient);
    }
}
