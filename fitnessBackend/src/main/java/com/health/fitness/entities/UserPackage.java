package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "userpackage")
@AssociationOverrides({
		@AssociationOverride(name = "iduserpackage.clientpackage", joinColumns = @JoinColumn(name = "idusers")),
		@AssociationOverride(name = "iduserpackage.packagesclient", joinColumns = @JoinColumn(name = "idPackage"))})
public class UserPackage {
	@EmbeddedId
	private UserPackageId iduserpackage = new UserPackageId();
	private boolean currentpackage;
	private LocalDate startdate;
	private LocalDate enddate;
	@OneToOne
	private Users choosencoach;
	@OneToOne
	private Users choosennutro;

	public UserPackageId getIduserpackage() {
		return iduserpackage;
	}

	public void setIduserpackage(UserPackageId iduserpackage) {
		this.iduserpackage = iduserpackage;
	}

	public boolean isCurrentpackage() {
		return currentpackage;
	}

	public void setCurrentpackage(boolean currentpackage) {
		this.currentpackage = currentpackage;
	}

	public LocalDate getStartdate() {
		return startdate;
	}

	public void setStartdate(LocalDate startdate) {
		this.startdate = startdate;
	}

	public LocalDate getEnddate() {
		return enddate;
	}

	public void setEnddate(LocalDate enddate) {
		this.enddate = enddate;
	}

	public Users getChoosencoach() {
		return choosencoach;
	}

	public void setChoosencoach(Users choosencoach) {
		this.choosencoach = choosencoach;
	}

	public Users getChoosennutro() {
		return choosennutro;
	}

	public void setChoosennutro(Users choosennutro) {
		this.choosennutro = choosennutro;
	}
}
