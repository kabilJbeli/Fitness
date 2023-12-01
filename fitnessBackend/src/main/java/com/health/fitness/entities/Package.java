package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.health.fitness.enums.Unitetime;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Entity
public class Package {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idPackage;
	private String libelle;
	private String description;
	private boolean enabled;
	private int validity;
	private Unitetime unitetime;
	@ManyToMany
	private List<PackageItem> packageItemsList;

	public int getIdPackage() {
		return idPackage;
	}

	public void setIdPackage(int idPackage) {
		this.idPackage = idPackage;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setPackageItemsList(List<PackageItem> packageItemsList) {
		this.packageItemsList = packageItemsList;
	}

	public List<PackageItem> getPackageItemsList() {
		return packageItemsList;
	}

	public void setValidity(int validity) {
		this.validity = validity;
	}

	public int getValidity() {
		return validity;
	}

	public Unitetime getUnitetime() {
		return unitetime;
	}

	public void setUnitetime(Unitetime unitetime) {
		this.unitetime = unitetime;
	}
}
