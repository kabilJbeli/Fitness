package com.health.fitness.entities;

import javax.persistence.*;

@Entity
public class CoachAppointment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int idcoachappointment;
	@ManyToOne
	private UserPackage User;
	private boolean status;

	public int getIdcoachappointment() {
		return idcoachappointment;
	}

	public void setIdcoachappointment(int idcoachappointment) {
		this.idcoachappointment = idcoachappointment;
	}

	public UserPackage getUser() {
		return User;
	}

	public void setUser(UserPackage user) {
		User = user;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
}
