package com.health.fitness.repositories;

import com.health.fitness.entities.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer> {

	Package findByIdPackage(int idPackage);

	List<Package> findByEnabled(boolean enabled);

}
