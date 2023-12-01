package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class PackageItem {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idPackageItem;
	private String description;
	private Double prix;
	private Double reduction;

	@ManyToMany(mappedBy = "packageItemsList")
	@JsonIgnore
	private List<Package> packageList;
	private boolean needspecificsupportofcoach;
	private boolean needspecificsupportofnutro;

	public int getIdPackageItem() {
		return idPackageItem;
	}

	public void setIdPackageItem(int idPackageItem) {
		this.idPackageItem = idPackageItem;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrix() {
		return prix;
	}

	public void setPrix(Double prix) {
		this.prix = prix;
	}

	public Double getReduction() {
		return reduction;
	}

	public void setReduction(Double reduction) {
		this.reduction = reduction;
	}

	public void setPackageList(List<Package> packageList) {
		this.packageList = packageList;
	}

	public List<Package> getPackageList() {
		return packageList;
	}
	public boolean isNeedspecificsupportofcoach() {
		return needspecificsupportofcoach;
	}
	public void setNeedspecificsupportofcoach(boolean needspecificsupportofcoach) {
		this.needspecificsupportofcoach = needspecificsupportofcoach;
	}
	public boolean isNeedspecificsupportofnutro() {
		return needspecificsupportofnutro;
	}
	public void setNeedspecificsupportofnutro(boolean needspecificsupportofnutro) {
		this.needspecificsupportofnutro = needspecificsupportofnutro;
	}
}
