package com.health.fitness.services;

import com.health.fitness.Utility.Buypackage;
import com.health.fitness.Utility.MenuResponse;
import com.health.fitness.Utility.Userglobal;
import com.health.fitness.Utility.Usertochoose;
import com.health.fitness.entities.UserPackage;
import com.health.fitness.entities.Users;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public interface UserServices {
	Users createUser(Userglobal userg);
	boolean updateUser(Userglobal user);
	@Transactional
    void updateUser(Users user, String keycloakId);
	Users findUser(int idUser);
	List<Userglobal> findUsers();

	List<Users> findclients();

	Users findUserkeycloalkid(String keycloalk);
	Userglobal findUserComplete(String keycloalk);
	Integer deleteUser(String keycloalk);
	void delete(int userid);
	boolean isEmailUsed(String email);
	boolean buypackage(Buypackage buypackage);
	UserPackage findCurrentpackage(String keycloak);
	List<UserPackage> coachclients(String keycloak);

	List<UserPackage> adminclients();

	List<UserPackage> nutroclients(String keycloak);
    Usertochoose finduserstochoose();
	List<MenuResponse> weeklymenu(String keycloakkey);
	List<UserPackage> finduserpackages(String keycloak);
}
