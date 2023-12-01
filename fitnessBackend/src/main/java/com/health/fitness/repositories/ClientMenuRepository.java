package com.health.fitness.repositories;

import com.health.fitness.entities.ClientMenu;
import com.health.fitness.entities.ClientMenuId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ClientMenuRepository extends JpaRepository<ClientMenu, ClientMenuId> {
    List<ClientMenu> findByIdclientMenuClientKeycloackuidAndIdclientMenuDatemenuBetween(String keycloakkey, LocalDate start, LocalDate end);
    @Query(value = "delete from clientmenu where menu_idmenus =?1 and client_idusers =?2 and datemenu=?3", nativeQuery = true)
    @Modifying
    void deleteassociations(int a, int b, LocalDate c);
    ClientMenu findByIdclientMenuClientIdusersAndIdclientMenuMenuIdmenusAndIdclientMenuDatemenu(int idclient, int idmenu , LocalDate date);
}
