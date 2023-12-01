package com.health.fitness.repositories;

import com.health.fitness.entities.PackageItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageItemRepository extends JpaRepository<PackageItem, Integer> {

	PackageItem findByIdPackageItem(int idPackageItem);

	PackageItem findByIdPackageItem(Long idPackageItem);
}
