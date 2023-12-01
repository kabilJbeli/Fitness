package com.health.fitness.servicesImp;

import com.health.fitness.entities.Ingredient;
import com.health.fitness.entities.Repas;
import com.health.fitness.entities.RepasIngredient;
import com.health.fitness.repositories.RepasIngredientRepository;
import com.health.fitness.repositories.RepasRepository;
import com.health.fitness.services.RepasServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
public class RepasServiceImp implements RepasServices {

	@Autowired
	RepasRepository repasRepository;
	@Autowired
	RepasIngredientRepository repasIngredientRepository;
	@Override
	@Transactional
	public boolean createRepas(Repas repas) {
		List<RepasIngredient> updated = new ArrayList<>();
		List<RepasIngredient> repasIngredients = repas.getRepasIngredients();
		repas.setRepasIngredients(new ArrayList<>());
		repas = repasRepository.save(repas);
		if (!(repasIngredients.size() ==1 && repasIngredients.get(0).getIdRepasIngredient().getIngredient() ==null))
		{
			for (RepasIngredient repasIngredient : repasIngredients){
				repasIngredient.getIdRepasIngredient().setRepas(repas);
				updated.add(repasIngredient);
			}
			repas.setRepasIngredients(updated);
			return repasRepository.save(repas) != null;
		}
		if (repas != null)
			return  true;
		return false;
	}

	@Override
	@Transactional
	public boolean updateRepas(Repas repas) {
		Repas repasdb = findRepas(repas.getIdRepas());
		List<RepasIngredient> existsalready = repasdb.getRepasIngredients();
		if (repas.getRepasIngredients().isEmpty()){
			for (RepasIngredient repasIngredient : existsalready){
				repasIngredientRepository.deleteassociations(repas.getIdRepas(), repasIngredient.getIdRepasIngredient().getIngredient().getIdIngredient());
			}
			return true;
		}
		List<RepasIngredient> keptorupdated = new ArrayList<>();
		List<RepasIngredient> newelements = new ArrayList<>();
		List<RepasIngredient> deletedelements = new ArrayList<>();

		for (RepasIngredient repasIngredient : existsalready){
			for (RepasIngredient repasIngredient1: repas.getRepasIngredients()){
				Ingredient fromdb = repasIngredient.getIdRepasIngredient().getIngredient();
				Ingredient fromview = repasIngredient1.getIdRepasIngredient().getIngredient();
				if (fromdb.getIdIngredient() == fromview.getIdIngredient()){
					repasIngredient.setPoids(repasIngredient1.getPoids());
					keptorupdated.add(repasIngredient);
				}
				else if (tobedeleted(fromdb, repas.getRepasIngredients())){
					deletedelements.add(repasIngredient);
				}
				else if (repasIngredientRepository.findByIdRepasIngredientRepasIdRepasAndIdRepasIngredientIngredientIdIngredient(repas.getIdRepas(), fromview.getIdIngredient()) == null){
					repasIngredient1.getIdRepasIngredient().setRepas(repasdb);
					newelements.add(repasIngredient1);
				}
			}
		}
		List<RepasIngredient> updated = new ArrayList<>();
		updated.addAll(newelements);
		updated.addAll(keptorupdated);
		repasdb.setRepasIngredients(updated);
		boolean outcome = repasRepository.save(repasdb) != null;
		for (RepasIngredient repasIngredient : deletedelements)
			repasIngredientRepository.deleteassociations(repas.getIdRepas(), repasIngredient.getIdRepasIngredient().getIngredient().getIdIngredient());

		return outcome;

	}

	public boolean tobedeleted(Ingredient repasi, List<RepasIngredient> lsit) {
		return lsit.stream().filter(rep -> rep.getIdRepasIngredient().getIngredient().getIdIngredient() == repasi.getIdIngredient()).count() > 0 ? false : true;
	}
	@Override
	public Repas findRepas(int idRepas) {
		return repasRepository.findByIdRepas(idRepas);
	}

	@Override
	public List<Repas> findAllRepas() {
		return repasRepository.findAll();
	}

	@Override
	public void deleteRepas(int idRepas) {
		repasRepository.deleteById(idRepas);
	}
}
