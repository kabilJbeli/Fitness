package com.health.fitness.services;

import com.health.fitness.entities.Repas;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public interface RepasServices {
	@Transactional
	boolean createRepas(Repas repas);
	@Transactional
	boolean updateRepas(Repas repas);

	Repas findRepas(int idRepas);

	List<Repas> findAllRepas();

	void deleteRepas(int idRepas);
}
