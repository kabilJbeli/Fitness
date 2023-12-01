package com.health.fitness.services;

import com.health.fitness.Utility.MenuResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ClientMenuService {
    List<MenuResponse> findweeklymeny(String keycloak);
}
