package com.health.fitness.entities;

import com.health.fitness.Utility.ImageUtility;
import com.health.fitness.enums.TypeExer;
import com.health.fitness.enums.Unitelevel;

import javax.persistence.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Entity
@Cacheable
public class ExerciceSportif {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idexercice")
	private int idExercice;
	private String description;
	private Unitelevel niveau;
	private TypeExer type;
 	@Lob
	@Column(name = "image")
	private byte[] image;
	private boolean homeexercice;
	public int getIdExercice() {return idExercice;}
	public void setIdExercice(int idExercice) {this.idExercice = idExercice;}
	public String getDescription() {return description;}
	public void setDescription(String description) {this.description = description;}
	public Unitelevel getNiveau() {
		return niveau;
	}
	public void setNiveau(Unitelevel niveau) {
		this.niveau = niveau;
	}
	public TypeExer getType() {
		return type;
	}
	public void setType(TypeExer type) {
		this.type = type;
	}

	public boolean isHomeexercice() {
		return homeexercice;
	}

	public void setHomeexercice(boolean homeexercice) {
		this.homeexercice = homeexercice;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(String image) {
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

		try {
			this.image = ImageUtility.compressImage(image,outputStream);
		} catch (IOException e) {
			e.printStackTrace();
			this.image = image.getBytes();
		}
	}
}
