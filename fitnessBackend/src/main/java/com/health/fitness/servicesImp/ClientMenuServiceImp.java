package com.health.fitness.servicesImp;

import com.health.fitness.Utility.MenuResponse;
import com.health.fitness.Utility.RepasResponse;
import com.health.fitness.entities.ClientMenu;
import com.health.fitness.entities.Ingredient;
import com.health.fitness.entities.MenuRepas;
import com.health.fitness.entities.RepasIngredient;
import com.health.fitness.repositories.ClientMenuRepository;
import com.health.fitness.services.ClientMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ClientMenuServiceImp implements ClientMenuService {
    @Autowired
    public ClientMenuRepository repository;
    @Override
    public List<MenuResponse> findweeklymeny(String keycloak) {
        LocalDate today = LocalDate.now();

        // Go backward to get Monday
        LocalDate monday = today;
        while (monday.getDayOfWeek() != DayOfWeek.MONDAY) {
            monday = monday.minusDays(1);
        }

        // Go forward to get Sunday
        LocalDate sunday = today;
        while (sunday.getDayOfWeek() != DayOfWeek.SUNDAY) {
            sunday = sunday.plusDays(1);
        }
        List<ClientMenu> menu = repository.findByIdclientMenuClientKeycloackuidAndIdclientMenuDatemenuBetween(keycloak, monday, sunday);
        List<MenuResponse> lightmenu = new ArrayList<>();
        for (ClientMenu clientmenu : menu){
            MenuResponse menuResponse = new MenuResponse();
            menuResponse.setDatemenu(clientmenu.getIdclientMenu().getDatemenu());
            List<MenuRepas> menuRepas = clientmenu.getIdclientMenu().getMenu().getMenurepas();

            for (MenuRepas menuepas : menuRepas){
                RepasResponse repasResponse = new RepasResponse();
                repasResponse.setOrder(menuepas.getOrders());
                List<RepasIngredient> repasIngredientlist = menuepas.getIdMenuRepas().getRepas().getRepasIngredients();
                if (repasIngredientlist.isEmpty())
                    repasResponse.setLabel(menuepas.getIdMenuRepas().getRepas().getLibelle());
                else{
                    for (RepasIngredient repasIngredient : repasIngredientlist){
                        Ingredient ingredient = repasIngredient.getIdRepasIngredient().getIngredient();
                        repasResponse.getIngredients().add(repasIngredient.getPoids() + " " + decidedwhatstodisplay( ingredient.getUnitepoids().name()) +ingredient.getLibelle());

                    }
                }
                menuResponse.getRepas().add(repasResponse);
            }
            lightmenu.add(menuResponse);
        }
        return lightmenu;
    }
    public String decidedwhatstodisplay(String value){
        if ("GRAMME".equals(value))
            return "gr ";
        //	LITRE, KG, CENTILITRE, MILLILITRE, GRAMME, PIECE, PORTION,
        else if ("LITRE".equals(value))
            return "L ";
        else if ("KG".equals(value))
            return "kg ";
        else if ("CENTILITRE".equals(value))
            return "cm ";
        else if ("MILLILITRE".equals(value))
                return "ml ";
        else if ("PIECE".equals(value) || "PORTION".equals(value))
            return " ";
        return " ";
    }
}
