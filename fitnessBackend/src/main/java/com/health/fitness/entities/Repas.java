package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Repas implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idrepas")
	private int idRepas;
	private String libelle;
	@OneToMany(mappedBy = "idRepasIngredient.repas", cascade = CascadeType.ALL)
	@Column(name = "repasIngredients")
	private List<RepasIngredient> repasIngredients;
	@OneToMany(mappedBy = "idMenuRepas.repas", cascade = CascadeType.ALL)
	@Column(name = "repasmenu")
	@JsonIgnore
	private List<MenuRepas>  repasmenu;

	public int getIdRepas() {
		return idRepas;
	}

	public void setIdRepas(int idRepas) {
		this.idRepas = idRepas;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public List<RepasIngredient> getRepasIngredients() {
		return repasIngredients;
	}

	public void setRepasIngredients(List<RepasIngredient> repasIngredients) {
		this.repasIngredients = repasIngredients;
	}

	public List<MenuRepas> getRepasmenu() {
		return repasmenu;
	}

	public void setRepasmenu(List<MenuRepas> repasmenu) {
		this.repasmenu = repasmenu;
	}
}
