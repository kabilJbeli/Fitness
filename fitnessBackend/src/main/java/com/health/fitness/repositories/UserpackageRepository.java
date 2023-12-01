package com.health.fitness.repositories;

import com.health.fitness.entities.UserPackage;
import com.health.fitness.entities.UserPackageId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface UserpackageRepository extends JpaRepository<UserPackage, UserPackageId> {
    List<UserPackage> findByChoosencoachKeycloackuidAndCurrentpackageTrueAndEnddateAfter(String keycloak, LocalDate date);
    List<UserPackage> findByChoosennutroKeycloackuidAndCurrentpackageTrueAndEnddateAfter(String keycloak, LocalDate date);
    List<UserPackage> findByCurrentpackageTrueAndEnddateAfter(LocalDate date);

    @Query("Select t from UserPackage t where t.currentpackage = true and (t.startdate <= CURRENT_DATE and t.enddate >= CURRENT_DATE) and t.iduserpackage.clientpackage.keycloackuid =?1")
    UserPackage findcurrentpackage(String keycloak);
    List<UserPackage> findByIduserpackageClientpackageKeycloackuidOrderByIduserpackageBuyDateAsc(String keycloak);

}
