package com.health.fitness.servicesImp;

import com.health.fitness.Utility.KeycloakUtility;
import com.health.fitness.Utility.Userglobal;
import com.health.fitness.services.KeycloakUserService;
import com.health.fitness.services.UserServices;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class KeycloakUserServiceImp implements KeycloakUserService {

	@Autowired
	private KeycloakUtility keycloakUtility;
	@Autowired
	private UserServices servicesusers;

	@Override
	public UserRepresentation createUserRepresentation(Userglobal user) {
		CredentialRepresentation credentials = new CredentialRepresentation();
		credentials.setType(CredentialRepresentation.PASSWORD);
		credentials.setValue(user.getPassword());
		credentials.setTemporary(false);
		UserRepresentation userRepresentation = new UserRepresentation();
		userRepresentation.setUsername(user.getEmail());
		userRepresentation.setEmail(user.getEmail());
		userRepresentation.setFirstName(user.getName());
		userRepresentation.setLastName(user.getSurname());
		userRepresentation.setEnabled(true);
		userRepresentation.setCredentials(List.of(credentials));
		userRepresentation.setEmailVerified(false);
		return userRepresentation;
	}
	@Override
	public UserRepresentation findUserRepresentation(String username) {
		return keycloakUtility.getSingleton().search(username, true).get(0);
	}

	@Override
	public boolean userRepresentationUpdate(Userglobal user) {
		UserRepresentation userRepresentation = findUserRepresentation(user.getEmail());
		if (userRepresentation != null) {
			userRepresentation.setLastName(user.getSurname());
			userRepresentation.setFirstName(user.getName());
			setRole(user.getRole(), userRepresentation.getUsername());
			UserResource userResource = keycloakUtility.getSingleton().get(user.getKeycloakkey());
			userResource.update(userRepresentation);
			return true;
		}
		return false;
	}

	@Override
	public String setRole(String assignedrole, String userkey) {
		UserRepresentation user = findUserRepresentation(userkey);
		UserResource userResource = keycloakUtility.getSingleton().get(user.getId());
		if (assignedrole == null || (assignedrole != null && assignedrole.equals("")))
			assignedrole = "Client";
		RoleRepresentation role = keycloakUtility.getInstance().realm("Fitness").roles()
				.get(assignedrole).toRepresentation();
		List<RoleRepresentation> roles = userResource.roles().getAll().getRealmMappings();
		roles = roles.stream().filter(roleexists -> !roleexists.isComposite()).collect(Collectors.toList());
		userResource.roles().realmLevel().remove(roles);
		userResource.roles().realmLevel().add(Collections.singletonList(role));
		userResource.update(user);
		return user.getId();
	}
}
