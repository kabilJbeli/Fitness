package com.health.fitness.services;

import com.health.fitness.entities.ExerciceSportif;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ExerciceSportifService {

    boolean createExerciceSportif(ExerciceSportif exerciceSportif);

    boolean updateExerciceSportif(ExerciceSportif exerciceSportif);

    ExerciceSportif findExerciceSportif(int idExercice);

    List<ExerciceSportif> findExerciceSportifbylocation(boolean ishome);

    List<ExerciceSportif> findExerciceSportifs();

    void deleteExerciceSportif(int idExercice);
}
