package com.health.fitness.servicesImp;

import com.health.fitness.entities.*;
import com.health.fitness.repositories.ClientMenuRepository;
import com.health.fitness.repositories.MenuRepasRepository;
import com.health.fitness.repositories.MenusRepository;
import com.health.fitness.services.MenuServices;
import com.health.fitness.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class MenuServicesImp implements MenuServices {

    @Autowired
    MenusRepository menusRepository;
    @Autowired
    UserServices userServices;
    @Autowired
    ClientMenuRepository clientMenuRepository;
    @Autowired
    MenuRepasRepository menuRepasRepository;

    @Override
    public boolean createMenu(Menu menu) {
        List<MenuRepas> menuRepas = menu.getMenurepas();
        List<MenuRepas> updatedrepas = new ArrayList<MenuRepas>();
        for (MenuRepas repas : menuRepas) {
            repas.getIdMenuRepas().setMenu(menu);
            updatedrepas.add(repas);
        }
        List<ClientMenu> clientMenus = menu.getClientmenu();
        List<ClientMenu> updatedclient = new ArrayList<>();
        for (ClientMenu clientMenu : clientMenus) {
            clientMenu.getIdclientMenu().setMenu(menu);
            updatedclient.add(clientMenu);
        }
        menu.setMenurepas(updatedrepas);
        menu.setClientmenu(updatedclient);
        return menusRepository.save(menu) != null;
    }

//	@Override
//	public boolean createMenu(AffectClientmenu menu) {
//		Users users = userServices.findUserkeycloalkid(menu.getKeycloak());
//		Menu menuaffected = new Menu();
//		menuaffected.setMenurepas(menu.getMenurepas());
//		menuaffected.setLibelle(menu.getLibelle());
//		ClientMenu clientmenu = new ClientMenu();
//		clientmenu.setAffectdate(LocalDate.now());
//		clientmenu.setIdclientMenu(new ClientMenuId(users, menuaffected, menu.getDatemnu()));
//		menuaffected.setClientmenu(new ArrayList<>());
//		menuaffected.getClientmenu().add(clientmenu);
//		return menusRepository.save(menuaffected) != null;
//	}

    @Override
    @Transactional
    public boolean updateMenu(Menu menu) {
		deleteMenu(menu.getIdmenus());
		menu.setIdmenus(0);
		return createMenu(menu);
    }

    private boolean tobedeletedRepasassociation(Repas fromdb, List<MenuRepas> clientmenu) {
        return clientmenu.stream().filter(rep -> rep.getIdMenuRepas().getRepas().getIdRepas() == fromdb.getIdRepas()).count() > 0 ? false : true;
    }

    public boolean tobedeletedClientassociation(Users repasi, List<ClientMenu> lsit) {
        return lsit.stream().filter(rep -> rep.getIdclientMenu().getClient().getIdusers() == repasi.getIdusers()).count() > 0 ? false : true;
    }

    @Override
    public Menu findMenu(int idMenu) {
        return menusRepository.findByIdmenus(idMenu);
    }

    @Override
    public List<Menu> findAllMenus() {
        return menusRepository.findAll();
    }

    @Override
    public void deleteMenu(int idMenu) {
        menusRepository.deleteById(idMenu);
    }
}
