package com.health.fitness.servicesImp;

import com.health.fitness.entities.Package;
import com.health.fitness.repositories.PackageRepository;
import com.health.fitness.services.KeycloakUserService;
import com.health.fitness.services.PackageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PackageServicesImp implements PackageServices {

	@Autowired
	PackageRepository packageRepository;
	@Autowired
	KeycloakUserService servicekey;

	@Override
	// @Transactional
	public boolean createPackage(Package pack) {
		return packageRepository.save(pack) != null;
	}

	@Override
	public boolean updatePackage(Package pack) {
		return packageRepository.save(pack) != null;
	}

	@Override
	public Package findPackage(int idPackage) {
		return packageRepository.findByIdPackage(idPackage);
	}

	@Override
	@Transactional
	public List<Package> findPackages() {
		return packageRepository.findAll();
	}

	@Override
	public void deletePackage(int idPackage) {
		packageRepository.deleteById(idPackage);
	}

	@Override
	public List<Package> findenabled() {
		return packageRepository.findByEnabled(true);
	}
}
