package com.health.fitness.services;

import com.health.fitness.Utility.Userglobal;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface KeycloakUserService {
    UserRepresentation createUserRepresentation(Userglobal user);
    UserRepresentation findUserRepresentation(String username);
    boolean userRepresentationUpdate(Userglobal user);
    String setRole(String assignedrole, String user);
}
