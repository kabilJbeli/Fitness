package com.health.fitness.repositories;

import com.health.fitness.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
	Users findByIdusers(int idusers);
	Users findByKeycloackuid(String keycloackuid);
	Optional<Users> findByUsername(String username);
	List<Users> findByKeycloackuidIn(List<String> keycloackuid);
	@Query(value = "select 1 from users where username =?1", nativeQuery = true)
    Integer findbyusernamequery(String username);
	List<Users> findByRole(String role);
	List<Users> findAll();
}
