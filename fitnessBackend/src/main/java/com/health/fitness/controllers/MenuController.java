package com.health.fitness.controllers;

import com.health.fitness.entities.Menu;
import com.health.fitness.services.MenuServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/menumanagement")
public class MenuController {

	@Autowired
	MenuServices menuServices;
	
	@PostMapping("/affectMenu")
	public ResponseEntity<Integer> affectMenuclient(@RequestBody Menu menu) {
		try {
			if (menuServices.createMenu(menu))
				return ResponseEntity.ok().body(1);

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@PutMapping("/updateMenu")
	public ResponseEntity<Integer> updateMenu(@RequestBody Menu menu) {
		try {
			if (menuServices.updateMenu(menu))
				return ResponseEntity.ok().body(1);

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(3);
		}
		return ResponseEntity.badRequest().body(3);
	}

	@GetMapping("/findMenu/{idMenu}")
	public ResponseEntity<Menu> findMenuById(@PathVariable int idMenu) {
		Menu menu;
		try {
			menu = menuServices.findMenu(idMenu);

		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new Menu());
		}
		return new ResponseEntity<>(menu, HttpStatus.OK);
	}

	@GetMapping("/findMenus")
	public ResponseEntity<?> findMenus() {
		try {
			return ResponseEntity.ok().body(menuServices.findAllMenus());
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new ArrayList<Menu>());
		}
	}

	@DeleteMapping("/deleteMenu/{idMenu}")
	public void deleteMenu(@PathVariable int idMenu) {
		menuServices.deleteMenu(idMenu);
	}

}
