package com.health.fitness.services;

import com.health.fitness.entities.Pictures;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PicturesService {

	Pictures createPicture(Pictures picture);

	List<Pictures> createPicture(List<Pictures> picture);

	void deletePicture(Pictures picture);
}
