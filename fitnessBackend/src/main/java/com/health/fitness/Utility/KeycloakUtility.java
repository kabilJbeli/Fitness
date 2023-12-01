package com.health.fitness.Utility;

import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RolesResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.core.env.Environment;

import java.util.List;
import java.util.Set;

@Configuration
public class KeycloakUtility {
    @Autowired
    private Environment env;

    @Bean
    @Scope("singleton")
    public KeycloakBuilder getinstancebuider() {
        return KeycloakBuilder.builder().realm(env.getProperty("keycloak.realm"))
                .serverUrl(env.getProperty("keycloak.auth-server-url")).clientId("Fitnessfront");
    }

    @Bean
    @Scope("singleton")
    public RolesResource getinstancerole(){
        return getInstance().realm("Fitness")
                .roles();
    }

    @Bean
    @Scope("singleton")
    public Keycloak getInstance() {
        return Keycloak.getInstance(env.getProperty("keycloak.auth-server-url"), "Fitness",
                    "helpdesk", "admin", "Fitnessfront");
    }

    @Bean
    @Scope ("singleton")
    public UsersResource getSingleton() {
        return getInstance().realm("Fitness").users();
    }
}
