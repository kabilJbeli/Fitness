package com.health.fitness.controllers;

import com.health.fitness.entities.PackageItem;
import com.health.fitness.services.PackageItemServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/packageitemmanagement")
public class PackagesItemController {

	@Autowired
	PackageItemServices packageItemServices;

	@PostMapping("/createPackageItem")
	public ResponseEntity<Integer> createPackageItem(@RequestBody PackageItem packageItem) {
		try {
			if (packageItemServices.createPackageItem(packageItem))
				return ResponseEntity.ok().body(1);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@PutMapping("/updatePackageItem")
	public ResponseEntity<Integer> updatePackageItem(@RequestBody PackageItem packageItem) {
		try {
			if (packageItemServices.updatePackageItem(packageItem))
				return ResponseEntity.ok().body(1);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@GetMapping("/findPackageItem/{idPackageItem}")
	public ResponseEntity<PackageItem> findPackageItemById(@PathVariable Integer idPackageItem) {
		PackageItem packageItem;
		try {
			packageItem = packageItemServices.findPackageItem(idPackageItem);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new PackageItem());
		}
		return new ResponseEntity<>(packageItem, HttpStatus.OK);
	}

	@GetMapping("/findPackagesItems")
	public ResponseEntity<List<PackageItem>> findListPackageItem() {
		List<PackageItem> packageItemList = new ArrayList<PackageItem>();
		try {
			packageItemList = packageItemServices.findPackagesItem();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(packageItemList);
		}
		return new ResponseEntity<>(packageItemList, HttpStatus.OK);
	}

	@DeleteMapping("/deletePackageItem/{idPackageItem}")
	public void deletePackageItem(@PathVariable int idPackageItem) {
		packageItemServices.deletePackageItem(idPackageItem);
	}
}
