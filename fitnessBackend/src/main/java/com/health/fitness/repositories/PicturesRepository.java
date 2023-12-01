package com.health.fitness.repositories;

import com.health.fitness.entities.Pictures;
import com.health.fitness.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PicturesRepository extends JpaRepository<Pictures, Integer> {
    Pictures findByCoach(Users user);
    List<Pictures> findByclient(Users user);
}
