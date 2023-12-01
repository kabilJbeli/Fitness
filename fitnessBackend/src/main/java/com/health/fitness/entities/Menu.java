package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idmenus;
	private String libelle;
	@OneToMany(mappedBy = "idclientMenu.menu", cascade = CascadeType.ALL)
	@Column(name = "clientmenu")
	private List<ClientMenu> clientmenu;
	@OneToMany(mappedBy = "idMenuRepas.menu", cascade = CascadeType.ALL)
	@Column(name = "menurepas")
	private List<MenuRepas>  menurepas;

	public int getIdmenus() {
		return idmenus;
	}

	public void setIdmenus(int idmenus) {
		this.idmenus = idmenus;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public List<ClientMenu> getClientmenu() {
		return clientmenu;
	}

	public void setClientmenu(List<ClientMenu> clientmenu) {
		this.clientmenu = clientmenu;
	}

	public List<MenuRepas> getMenurepas() {
		return menurepas;
	}

	public void setMenurepas(List<MenuRepas> menurepas) {
		this.menurepas = menurepas;
	}
}
