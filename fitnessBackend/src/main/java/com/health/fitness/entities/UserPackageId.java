package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import java.io.Serializable;
import java.time.LocalDate;

@Embeddable
public class UserPackageId implements Serializable {
	@ManyToOne(cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"userpackage", "menuclient", "picturesList" })
	private Users clientpackage;
	@ManyToOne(cascade = CascadeType.ALL)
	@JsonIgnoreProperties({ "packageuser", "userpackage", "picturesList" })
	private Package packagesclient;
	private LocalDate buyDate =  LocalDate.now();

	@Override
	public int hashCode() {
		return super.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		return super.equals(obj);
	}

	public Users getClientpackage() {
		return clientpackage;
	}

	public void setClientpackage(Users clientpackage) {
		this.clientpackage = clientpackage;
	}

	public Package getPackagesclient() {
		return packagesclient;
	}

	public void setPackagesclient(Package packagesclient) {
		this.packagesclient = packagesclient;
	}

	public LocalDate getBuyDate() {
		return buyDate;
	}

	public void setBuyDate(LocalDate buyDate) {
		this.buyDate = buyDate;
	}
}
