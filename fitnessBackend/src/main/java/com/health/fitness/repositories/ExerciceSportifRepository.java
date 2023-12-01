package com.health.fitness.repositories;

import com.health.fitness.entities.ExerciceSportif;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciceSportifRepository extends JpaRepository<ExerciceSportif,Integer> {
    ExerciceSportif findByIdExercice(int idExercise);
    List<ExerciceSportif> findByHomeexercice(boolean ishome);

}
