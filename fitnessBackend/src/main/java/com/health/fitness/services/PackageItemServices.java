package com.health.fitness.services;

import com.health.fitness.entities.PackageItem;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PackageItemServices {

	boolean createPackageItem(PackageItem packageItem);

	boolean updatePackageItem(PackageItem packageItem);

	PackageItem findPackageItem(Integer idPackageItem);

	List<PackageItem> findPackagesItem();

	void deletePackageItem(int idPackageItem);
}
