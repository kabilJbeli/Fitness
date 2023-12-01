package com.health.fitness.servicesImp;

import com.health.fitness.entities.Pictures;
import com.health.fitness.repositories.PicturesRepository;
import com.health.fitness.services.PicturesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PicturesServiceImp implements PicturesService {

	@Autowired
	PicturesRepository repository;

	@Override
	public Pictures createPicture(Pictures picture) {
		return repository.save(picture);
	}

	@Override
	public List<Pictures> createPicture(List<Pictures> picture) {
		return repository.saveAll(picture);
	}

	@Override
	public void deletePicture(Pictures picture) {
		repository.delete(picture);
	}

}
