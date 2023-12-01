package com.health.fitness.controllers;

import com.health.fitness.Utility.Buypackage;
import com.health.fitness.Utility.KeycloakUtility;
import com.health.fitness.Utility.Userglobal;
import com.health.fitness.entities.ClientMenu;
import com.health.fitness.entities.UserPackage;
import com.health.fitness.entities.Users;
import com.health.fitness.services.KeycloakUserService;
import com.health.fitness.services.UserServices;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.representations.idm.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import javax.ws.rs.core.Response;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/usersmanagement")
public class UsersController {
	@Autowired
	UserServices servicesusers;
	@Autowired
	KeycloakUserService servicekey;
	@Autowired
	private KeycloakUtility keycloakUtility;

	@PostMapping("/userCreation")
	public ResponseEntity<Integer> createUser(@RequestBody Userglobal user) {
		if (!servicesusers.isEmailUsed(user.getEmail())) {
			Users userserilized = servicesusers.createUser(user);
			if (userserilized != null) {
				UserRepresentation userRepresentation = servicekey.createUserRepresentation(user);
				Response result = keycloakUtility.getSingleton().create(userRepresentation);
				if (result.getStatus() == HttpStatus.CREATED.value()) {
					String outcomes = servicekey.setRole(user.getRole(), user.getEmail());
					servicesusers.updateUser(userserilized, outcomes);
					return ResponseEntity.ok().body(1);
				}
				else {
					servicesusers.delete(userserilized.getIdusers());
					return ResponseEntity.badRequest().body(2);
				}
			}
		} else
			return ResponseEntity.badRequest().body(2);
		return ResponseEntity.badRequest().body(3);

	}

	@PostMapping("/clientcreation")
	public ResponseEntity<Integer> createclient(@RequestBody Userglobal user) {
		if (!(user.getRole() == null))
			return ResponseEntity.badRequest().body(3);
		return createUser(user);
	}

	@GetMapping("/findUser/{idUser}")
	public ResponseEntity<?> findUser(@PathVariable String idUser) {
		try {
			return ResponseEntity.ok().body(servicesusers.findUserComplete(idUser));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new Userglobal());
		}
	}


	@GetMapping("/findUsers")
	public ResponseEntity<?> findUsers() {
		try {
			return ResponseEntity.ok().body(servicesusers.findUsers());

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@GetMapping("/findUsersdb")
	public ResponseEntity<?> findUsersdb() {
		try {
			return ResponseEntity.ok().body(servicesusers.findclients());

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@PutMapping("/updateUser")
	public ResponseEntity<Integer> updateUser(@RequestBody Userglobal userg) {
		try {
			if (servicesusers.updateUser(userg))
				return ResponseEntity.ok().body(1);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@PutMapping("/disableenable")
	public ResponseEntity<Integer> disableenable(@RequestBody String keycloalk) {
		try {
			Users users = servicesusers.findUserkeycloalkid(keycloalk);
			UserRepresentation userRepresentations = keycloakUtility.getSingleton().search(users.getUsername(), true)
					.get(0);

			if (userRepresentations != null) {
				userRepresentations.setEnabled(!userRepresentations.isEnabled());
				UserResource userResource = keycloakUtility.getSingleton().get(userRepresentations.getId());
				userResource.update(userRepresentations);
				users.setEnabled(!users.isEnabled());
				servicesusers.updateUser(users, users.getKeycloackuid());
				return ResponseEntity.ok().body(1);
			} else {
				return ResponseEntity.badRequest().body(0);
			}
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
	}

	@DeleteMapping("/deleteUser/{keycloakkey}")
	public ResponseEntity<Integer> deleteUser(@PathVariable String keycloakkey) {
		try {
			Integer res = servicesusers.deleteUser(keycloakkey);
			if (res == 1) {
				Response result = keycloakUtility.getSingleton().delete(keycloakkey);
				if (result.getStatus() == HttpStatus.NO_CONTENT.value()) {
					return new ResponseEntity<>(HttpStatus.valueOf(result.getStatus()));
				}
			}
			return ResponseEntity.badRequest().body(res);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
	}

	@PutMapping("/updatePassword")
	public ResponseEntity<Integer> updatePassword(@RequestBody Userglobal userg) {
		try {
			Keycloak key = keycloakUtility.getinstancebuider().username(userg.getEmail()).password(userg.getPassword()).build();
			key.tokenManager().getAccessToken();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		UserRepresentation user = servicekey.findUserRepresentation(userg.getEmail());
		if (user != null) {
			UserResource userResource = keycloakUtility.getSingleton().get(user.getId());
			CredentialRepresentation credentials = new CredentialRepresentation();
			credentials.setType(CredentialRepresentation.PASSWORD);
			credentials.setValue(userg.getNewpassword());
			credentials.setTemporary(false);
			user.setCredentials(List.of(credentials));

			userResource.update(user);
			return ResponseEntity.ok().body(1);
		} else {
			return ResponseEntity.badRequest().body(3);
		}
	}

	@GetMapping("/checkEmail/{email}")
	public ResponseEntity<Boolean> isEmailUsed(@PathVariable String email) {
		try {
			return ResponseEntity.ok().body(servicesusers.isEmailUsed(email.replace("\\s", "")));
		} catch (Exception e) {
			return ResponseEntity.ok().body(false);
		}
	}

	@GetMapping("/currentpackage/{keycloakkey}")
	public ResponseEntity<?> currentpackage(@PathVariable String keycloakkey){
		try {
            UserPackage userpack = servicesusers.findCurrentpackage(keycloakkey);
            if (userpack !=null)
                return ResponseEntity.ok().body(servicesusers.findCurrentpackage(keycloakkey));
            return ResponseEntity.ok().body(2);
        } catch (Exception e) {
			return ResponseEntity.badRequest().body(new UserPackage());
		}
	}

	@GetMapping("/findmenu/{keycloakkey}")
	public ResponseEntity<?> getMenu(@PathVariable String keycloakkey){
		try {
			return ResponseEntity.ok().body(servicesusers.weeklymenu(keycloakkey));
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new ClientMenu());
		}
	}

	@PutMapping("/buyPackage")
	public ResponseEntity<?> buyPackage(@RequestBody Buypackage buypackage){
		try {
			return ResponseEntity.ok().body(servicesusers.buypackage(buypackage));

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
	}

	@GetMapping("/coachclient/{keycloakkey}")
	public ResponseEntity<?> coachclient(@PathVariable String keycloakkey){
		try {
			return ResponseEntity.ok().body(servicesusers.coachclients(keycloakkey));

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
	}

	@GetMapping("/adminclient")
	public ResponseEntity<?> adminclient(){
		try {
			return ResponseEntity.ok().body(servicesusers.adminclients());

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
	}

	@GetMapping("/nutroclient/{keycloakkey}")
	public ResponseEntity<?> nutroclient(@PathVariable String keycloakkey){
		try {
			return ResponseEntity.ok().body(servicesusers.nutroclients(keycloakkey));

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
	}

	@GetMapping("/findcoachandnutro")
	public ResponseEntity<?> findcoachandnutro(){
		try {
			return ResponseEntity.ok().body(servicesusers.finduserstochoose());

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
	}
	@GetMapping("/finduserpackages/{keycloakkey}")
	public ResponseEntity<?> finduserpackages(@PathVariable String keycloakkey){
		try {
			return ResponseEntity.ok().body(servicesusers.finduserpackages(keycloakkey));

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
	}
}
