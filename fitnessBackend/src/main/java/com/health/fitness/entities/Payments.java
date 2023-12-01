package com.health.fitness.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Payments {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idpayments;

	public int getIdpayments() {
		return idpayments;
	}

	public void setIdpayments(int idpayments) {
		this.idpayments = idpayments;
	}
}
