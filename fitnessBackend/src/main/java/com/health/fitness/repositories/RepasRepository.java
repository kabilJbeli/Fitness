package com.health.fitness.repositories;

import com.health.fitness.entities.Repas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepasRepository extends JpaRepository<Repas, Integer> {

	Repas findByIdRepas(int idRepas);
}
