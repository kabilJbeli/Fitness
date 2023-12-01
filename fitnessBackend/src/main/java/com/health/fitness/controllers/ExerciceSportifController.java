package com.health.fitness.controllers;

import com.health.fitness.entities.ExerciceSportif;
import com.health.fitness.services.ExerciceSportifService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/exercicesportifmanagement")
public class ExerciceSportifController {
    
    @Autowired
    ExerciceSportifService exerciceSportifService;


    @PostMapping("/createExerciceSportif")
    public ResponseEntity<Integer> createExerciceSportif(@RequestBody ExerciceSportif exerciceSportif) {
        try {
            if (exerciceSportifService.createExerciceSportif(exerciceSportif))
                return ResponseEntity.ok().body(1);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(3);
        }
        return ResponseEntity.badRequest().body(3);
    }

    @PutMapping("/updateExerciceSportif")
    public ResponseEntity<Integer> updateExerciceSportif(@RequestBody ExerciceSportif exerciceSportif) {
        try {
            if (exerciceSportifService.updateExerciceSportif(exerciceSportif))
                return ResponseEntity.ok().body(1);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(3);
        }
        return ResponseEntity.badRequest().body(3);
    }

    @GetMapping("/findExerciceSportif/{idExercice}")
    public ResponseEntity<ExerciceSportif> findExerciceSportifById(@PathVariable int idExercice) {
        ExerciceSportif exerciceSportif;
        try {
            exerciceSportif = exerciceSportifService.findExerciceSportif(idExercice);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ExerciceSportif());
        }
        return new ResponseEntity<>(exerciceSportif, HttpStatus.OK);
    }

    @GetMapping("/findExerciceSportiflocation/{location}")
    public ResponseEntity<?> findExerciceSportifBylocation(@PathVariable boolean idExercice) {
        try {
            return new ResponseEntity<>(exerciceSportifService.findExerciceSportifbylocation(idExercice), HttpStatus.OK);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ExerciceSportif());
        }
    }

    @GetMapping("/findExerciceSportifs")
    public ResponseEntity<List<ExerciceSportif>> findListExerciceSportif() {
        List<ExerciceSportif> exerciceSportifList = new ArrayList<ExerciceSportif>();
        try {
            exerciceSportifList = exerciceSportifService.findExerciceSportifs();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(exerciceSportifList);
        }
        return new ResponseEntity<>(exerciceSportifList, HttpStatus.OK);
    }

    @DeleteMapping("/deleteExerciceSportif/{idExerciceSportif}")
    public void deleteExerciceSportif(@PathVariable int idExerciceSportif) {
        exerciceSportifService.deleteExerciceSportif(idExerciceSportif);
    }
}
