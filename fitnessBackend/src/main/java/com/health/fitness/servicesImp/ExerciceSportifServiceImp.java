package com.health.fitness.servicesImp;

import com.health.fitness.entities.ExerciceSportif;
import com.health.fitness.repositories.ExerciceSportifRepository;
import com.health.fitness.services.ExerciceSportifService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ExerciceSportifServiceImp implements ExerciceSportifService {

    @Autowired
    ExerciceSportifRepository exerciceSportifRepository;
    @Override
    public boolean createExerciceSportif(ExerciceSportif exerciceSportif) {return exerciceSportifRepository.save(exerciceSportif) != null;}
    @Override
    public boolean updateExerciceSportif(ExerciceSportif exerciceSportif) {return exerciceSportifRepository.save(exerciceSportif) != null;}
    @Override
    public ExerciceSportif findExerciceSportif(int idExercice) {return exerciceSportifRepository.findByIdExercice(idExercice) ;}
    @Override
    public List<ExerciceSportif> findExerciceSportifbylocation(boolean ishome) {return exerciceSportifRepository.findByHomeexercice(ishome) ;}
    @Override
    public List<ExerciceSportif> findExerciceSportifs() {return exerciceSportifRepository.findAll();}
    @Override
    public void deleteExerciceSportif(int idExercice) {exerciceSportifRepository.deleteById(idExercice);}
}
