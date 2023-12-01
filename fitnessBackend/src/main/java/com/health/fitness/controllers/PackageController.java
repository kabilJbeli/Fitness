package com.health.fitness.controllers;

import com.health.fitness.entities.Package;
import com.health.fitness.services.PackageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/packagemanagement")
public class PackageController {

	@Autowired
	PackageServices packageServices;

	@PostMapping("/createPackage")
	public ResponseEntity<Integer> createPackage(@RequestBody Package pack) {
		try {
			if (packageServices.createPackage(pack))
				return ResponseEntity.ok().body(1);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@PutMapping("/updatePackage")
	public ResponseEntity<Integer> updatePackage(@RequestBody Package pack) {
		try {
			if (packageServices.updatePackage(pack))
				return ResponseEntity.ok().body(1);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@GetMapping("/findPackage/{idPackage}")
	public ResponseEntity<Package> findPackageById(@PathVariable int idPackage) {
		Package pack;
		try {
			pack = packageServices.findPackage(idPackage);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new Package());
		}
		return new ResponseEntity<>(pack, HttpStatus.OK);
	}

	@GetMapping("/findpackageEnabled")
	public ResponseEntity<?> findEnabledpackage() {
		try {
			return new ResponseEntity<>(packageServices.findenabled(), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@GetMapping("/findPackages")
	public ResponseEntity<List<Package>> findListPackage() {
		List<Package> packageList = new ArrayList<Package>();
		try {
			packageList = packageServices.findPackages();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(packageList);
		}
		return new ResponseEntity<>(packageList, HttpStatus.OK);

	}

	@DeleteMapping("/deletePackage/{idPackage}")
	public void deletePackage(@PathVariable int idPackage) {
		packageServices.deletePackage(idPackage);
	}
}
