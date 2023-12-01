package com.health.fitness.services;

import com.health.fitness.entities.UserPackage;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserpackageService {
	void deleteuserpackage(List<UserPackage> userpackages);
    void updateUserpackage(UserPackage userPackage);
    void disableUserpackage(UserPackage userpackage);
    List<UserPackage> findcoachclient(String keycloak);
    List<UserPackage> findnutroclient(String keycloak);

    List<UserPackage> findallusershavingcurrentpackages();

    UserPackage currentpackage(String keycloak);

    List<UserPackage> finduserpackages(String keycloak);
}
