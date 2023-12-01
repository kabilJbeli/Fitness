package com.health.fitness.entities;

import javax.persistence.*;

import ch.qos.logback.core.boolex.EvaluationException;
import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.health.fitness.Utility.ImageUtility;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.Type;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;

@Entity
@Cacheable
public class Pictures {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idPicture;
    
    @Lob
    @Column(name = "image")
    private byte[] image;
    @OneToOne
    @JsonIgnoreProperties(value  ={"pictures"})
    Users coach;
    @OneToOne
    @JsonIgnoreProperties(value  ={"picturesList"})
    Users client;
    private LocalDateTime creationDate = LocalDateTime.now();

    public int getIdPicture() {
        return idPicture;
    }

    public void setIdPicture(int idPicture) {
        this.idPicture = idPicture;
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
    
    public Users getCoach() {
        return coach;
    }

    public void setCoach(Users coach) {
        this.coach = coach;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setClient(Users client) {
        this.client = client;
    }

    public Users getClient() {
        return client;
    }
}
