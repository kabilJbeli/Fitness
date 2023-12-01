package com.health.fitness.controllers;

import com.health.fitness.entities.Repas;
import com.health.fitness.services.RepasServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/repasmanagement")
public class RepasController {
	@Autowired
	RepasServices repasServices;

	@PostMapping("/createRepas")
	public ResponseEntity<Integer> createRepas(@RequestBody Repas repas) {
		try {
			if (repasServices.createRepas(repas))
				return ResponseEntity.ok().body(1);
		} catch (Exception e) {
			if (e instanceof InvalidDataAccessApiUsageException){
				return ResponseEntity.badRequest().body(2);
			}
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@PutMapping("/updateRepas")
	public ResponseEntity<Integer> updateRepas(@RequestBody Repas repas) {
		try {
			if (repasServices.updateRepas(repas))
				return ResponseEntity.ok().body(1);
		} catch (Exception e) {
			if (e instanceof InvalidDataAccessApiUsageException){
				return ResponseEntity.badRequest().body(2);
			}
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@GetMapping("/findRepas/{idRepas}")
	public ResponseEntity<Repas> findRepasById(@PathVariable int idRepas) {
		Repas repas;
		try {
			repas = repasServices.findRepas(idRepas);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new Repas());
		}
		return new ResponseEntity<>(repas, HttpStatus.OK);
	}

	@GetMapping("/findAllRepas")
	public ResponseEntity<List<Repas>> findListRepas() {
		List<Repas> repaList = new ArrayList<Repas>();
		try {
			repaList = repasServices.findAllRepas();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(repaList);
		}
		return new ResponseEntity<>(repaList, HttpStatus.OK);
	}

	@DeleteMapping("/deleteRepas/{idRepas}")
	public void deleteRepas(@PathVariable int idRepas) {
		repasServices.deleteRepas(idRepas);
	}
}
