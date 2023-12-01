package com.health.fitness.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "clientexcercice")
public class ExerciceSportifClient {
	@EmbeddedId
	private ExerciceSportifClientId idExerciceClient = new ExerciceSportifClientId();
	private int numberserie;
	private int numberactperserie;
	public ExerciceSportifClientId getIdExerciceClient() {return idExerciceClient;}
	public void setIdExerciceClient(ExerciceSportifClientId idExerciceClient) {this.idExerciceClient = idExerciceClient;}
	public int getNumberserie() {
		return numberserie;
	}
	public void setNumberserie(int numberserie) {
		this.numberserie = numberserie;
	}
	public int getNumberactperserie() {
		return numberactperserie;
	}
	public void setNumberactperserie(int numberactperserie) {
		this.numberactperserie = numberactperserie;
	}
}
