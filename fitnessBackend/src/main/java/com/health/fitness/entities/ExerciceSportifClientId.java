package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Embeddable
public class ExerciceSportifClientId implements Serializable {
	@ManyToOne(cascade = CascadeType.ALL)
	@JsonIgnoreProperties({ "exerciceclient", "clientexercice" })
	private Users client;
	@ManyToOne(cascade = CascadeType.ALL)
	@JsonIgnoreProperties({ "exerciceclient", "clientexercice" })
	private ExerciceSportif exercicesportif;
	private LocalDate startdate;
	private LocalDate enddate;
	private String affectdescription;
	@Override
	public int hashCode() {return super.hashCode();}
	@Override
	public boolean equals(Object o) {
		if (this == o) return true;

		if (o == null || getClass() != o.getClass())
			return false;

		ExerciceSportifClientId that = (ExerciceSportifClientId) o;
		return Objects.equals(exercicesportif.getIdExercice(), that.getExercicesportif().getIdExercice()) &&
				Objects.equals(client.getIdusers(), that.getClient().getIdusers());
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

	public Users getClient() {return client;}
	public void setClient(Users client) {this.client = client;}
	public ExerciceSportif getExercicesportif() {return exercicesportif;}
	public void setExercicesportif(ExerciceSportif exercicesportif) {this.exercicesportif = exercicesportif;}

	public String getAffectdescription() {
		return affectdescription;
	}

	public void setAffectdescription(String affectdescription) {
		this.affectdescription = affectdescription;
	}
}
