package com.health.fitness.repositories;

import com.health.fitness.entities.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MenusRepository extends JpaRepository<Menu, Integer> {
	Menu findByIdmenus(int idMenus);

}
