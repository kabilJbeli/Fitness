package com.health.fitness.servicesImp;

import com.health.fitness.entities.PackageItem;
import com.health.fitness.repositories.PackageItemRepository;
import com.health.fitness.services.PackageItemServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageItemServicesImp implements PackageItemServices {

	@Autowired
	private PackageItemRepository packageItemRepository;

	@Override
	public boolean createPackageItem(PackageItem packageItem) {
		return packageItemRepository.save(packageItem) != null;
	}

	@Override
	public boolean updatePackageItem(PackageItem packageItem) {
		return packageItemRepository.save(packageItem) != null;
	}

	@Override
	public PackageItem findPackageItem(Integer idPackageItem) {
		return packageItemRepository.findByIdPackageItem(idPackageItem);
	}

	@Override
	public List<PackageItem> findPackagesItem() {
		return packageItemRepository.findAll();
	}

	@Override
	public void deletePackageItem(int idPackageItem) {
		packageItemRepository.deleteById(idPackageItem);
	}
}
