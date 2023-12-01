package com.health.fitness.services;

import com.health.fitness.entities.Package;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface PackageServices {
	boolean createPackage(Package pack);

	boolean updatePackage(Package pack);

	Package findPackage(int idPackage);

	List<Package> findPackages();

	void deletePackage(int idPackage);

	List<Package> findenabled();
}
