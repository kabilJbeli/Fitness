package com.health.fitness.controllers;

import com.health.fitness.entities.Ingredient;
import com.health.fitness.services.IngredientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/ingredientmanagement")
public class IngredientController {

	@Autowired
	IngredientServices ingredientServices;

	@PostMapping("/createIngredient")
	public ResponseEntity<Integer> createIngredient(@RequestBody Ingredient ingredient) {
		try {
			if (ingredientServices.createIngredient(ingredient))
				return ResponseEntity.ok().body(1);

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@PutMapping("/updateIngredient")
	public ResponseEntity<Integer> updateIngredient(@RequestBody Ingredient ingredient) {
		try {
			if (ingredientServices.updateIngredient(ingredient))
				return ResponseEntity.ok().body(1);

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@GetMapping("/findIngredient/{idIngredient}")
	public ResponseEntity<Ingredient> findIngredientById(@PathVariable int idIngredient) {
		Ingredient ingredient;
		try {
			ingredient = ingredientServices.findIngredient(idIngredient);

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new Ingredient());
		}
		return new ResponseEntity<>(ingredient, HttpStatus.OK);
	}

	@GetMapping("/findIngredients")
	public ResponseEntity<List<Ingredient>> findListIngredient() {
		List<Ingredient> ingredientList = new ArrayList<Ingredient>();
		try {
			ingredientList = ingredientServices.findIngredients();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(ingredientList);
		}
		return new ResponseEntity<>(ingredientList, HttpStatus.OK);
	}

	@DeleteMapping("/deleteIngredient/{idIngredient}")
	public void deleteIngredient(@PathVariable int idIngredient) {
		ingredientServices.deleteIngredient(idIngredient);
	}
}
