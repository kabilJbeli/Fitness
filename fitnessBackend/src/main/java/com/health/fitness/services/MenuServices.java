package com.health.fitness.services;

import com.health.fitness.entities.Menu;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MenuServices {
    boolean createMenu(Menu menu);
    boolean updateMenu(Menu menu);
    Menu findMenu(int idMenu);
    List<Menu> findAllMenus();
    void deleteMenu (int idMenu);
}
