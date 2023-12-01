package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.health.fitness.enums.Unitepoids;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Ingredient implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idingredient")
	private int idIngredient;
	private String libelle;
	private Unitepoids unitepoids;
	@OneToMany(mappedBy = "idRepasIngredient.ingredient", cascade = CascadeType.ALL)
	@Column(name = "ingredientsrepas")
	private List<RepasIngredient> ingredientsrepas;

	public int getIdIngredient() {
		return idIngredient;
	}

	public void setIdIngredient(int idIngredient) {
		this.idIngredient = idIngredient;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public Unitepoids getUnitepoids() {
		return unitepoids;
	}

	public void setUnitepoids(Unitepoids unitepoids) {
		this.unitepoids = unitepoids;
	}

	public List<RepasIngredient> getIngredientsrepas() {
		return ingredientsrepas;
	}

	public void setIngredientsrepas(List<RepasIngredient> ingredientsrepas) {
		this.ingredientsrepas = ingredientsrepas;
	}
}
