package com.health.fitness.repositories;

import com.health.fitness.entities.MenuRepas;
import com.health.fitness.entities.MenuRepasId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepasRepository extends JpaRepository<MenuRepas, MenuRepasId> {
    MenuRepas findByIdMenuRepasRepasIdRepasAndIdMenuRepasMenuIdmenus(int idRepas, int idmenus);
    @Query(value = "delete from menurepas where idmenus =?1 and id_repas =?2", nativeQuery = true)
    @Modifying
    void deleteassociations(int idmenus, int idRepas);
}
