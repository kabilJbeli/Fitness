package com.health.fitness.servicesImp;

import com.health.fitness.entities.UserPackage;
import com.health.fitness.repositories.UserpackageRepository;
import com.health.fitness.services.UserpackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
public class UserpackageServiceImp implements UserpackageService {
	@Autowired
	UserpackageRepository repository;

	@Override
	public void deleteuserpackage(List<UserPackage> userpackages) {
		repository.deleteAll(userpackages);
	}

	@Override
	public void updateUserpackage(UserPackage userPackage){
		repository.save(userPackage);
	}
	@Override
	public void disableUserpackage(UserPackage userpackage) {
		userpackage.setCurrentpackage(false);
		updateUserpackage(userpackage);
	}

	@Override
	public List<UserPackage> findcoachclient(String keycloak){
		return repository.findByChoosencoachKeycloackuidAndCurrentpackageTrueAndEnddateAfter(keycloak, LocalDate.now());
	}

	@Override
	public List<UserPackage> findnutroclient(String keycloak){
		return repository.findByChoosennutroKeycloackuidAndCurrentpackageTrueAndEnddateAfter(keycloak, LocalDate.now());
	}
	@Override
	@Transactional
	public List<UserPackage> findallusershavingcurrentpackages(){
		return repository.findByCurrentpackageTrueAndEnddateAfter(LocalDate.now());
	}
	@Override
	public UserPackage currentpackage(String keycloak){
		return repository.findcurrentpackage(keycloak);
	}

	@Override
	public List<UserPackage> finduserpackages(String keycloak){
		return repository.findByIduserpackageClientpackageKeycloackuidOrderByIduserpackageBuyDateAsc(keycloak);
	}

}
