package com.health.fitness.servicesImp;

import com.health.fitness.Utility.Buypackage;
import com.health.fitness.Utility.MenuResponse;
import com.health.fitness.Utility.Userglobal;
import com.health.fitness.Utility.Usertochoose;
import com.health.fitness.entities.*;
import com.health.fitness.entities.Package;
import com.health.fitness.enums.Genre;
import com.health.fitness.enums.ObjectifClient;
import com.health.fitness.enums.Unitetime;
import com.health.fitness.repositories.PicturesRepository;
import com.health.fitness.repositories.UsersRepository;
import com.health.fitness.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UsersServiceImp implements UserServices {

	@Autowired
	private UsersRepository repository;
	@Autowired
	private KeycloakUserService servicekey;
	@Autowired
	private UserpackageService sericepack;
	@Autowired
	private PackageServices servicepackage;
	@Autowired
	private PicturesRepository picreps;
	@Autowired
	private ClientMenuService clientmenuservice;
	@Autowired
	private PicturesRepository picturesRepository;

	@Override
	@Transactional
	public Users createUser(Userglobal userg) {
		try {
			Users users = new Users();
			users.setPhone(userg.getPhone());
			users.setBirthdate(userg.getBirthdate());
			users.setUsername(userg.getEmail());
			users.setDatetimecreation(LocalDate.now());
			users.setName(userg.getName());
			users.setSurname(userg.getSurname());
			users.setRole(userg.getRole());
			if (userg.getRole() == null || (userg.getRole() != null && userg.getRole().equals(""))) {
				users.setGenre(Genre.valueOf(userg.getGender()));
				users.setSick(userg.isSick());
				users.setSickdescription(userg.getSickdescription());
				users.setAllergie(userg.isAllergie());
				users.setAllergiedescription(userg.getAllergiedescription());
				users.setDaysworkout(userg.getDaysworkout());
				users.setWorkouthome(userg.isWorkouthome());
				users.setFoodrequirements(userg.getFoodrequirements());
				users.setPoid(userg.getPoids());
				users.setTaille(userg.getTaille());
				users.setAge(userg.getAge());
				users.setObjectif(decidedObjectif(userg.getObjectif()));
				users.setRole("Client");
				List<Pictures> listpic = userg.getPictures();
				List<Pictures> listpicupdated = new ArrayList<Pictures>();
				for (Pictures pics: listpic){
					pics.setClient(users);
					listpicupdated.add(pics);
				}
				users.setPicturesList(listpicupdated);
			}
			String role = userg.getRole();
			if (role != null && (role.equals("Coach") || role.equals("Nutritionist")) && userg.getCoachpic().getImage()!=null) {
				Pictures picture = userg.getCoachpic();
				picture.setCoach(users);
				users.setPictures(picture);
			}
			return repository.save(users);
		} catch (Exception e){
			return null;
		}
	}

	public ObjectifClient decidedObjectif (int objectif){
		if (objectif ==0)
			return ObjectifClient.Meremettreenforme;
		else if (objectif == 1)
			return ObjectifClient.PerdrePoids;
		else
			return ObjectifClient.PrendreMuscucle;
	}

	@Override
	@Transactional
	public boolean updateUser(Userglobal userg) {
		Users user = findUserkeycloalkid(userg.getKeycloakkey());
		if (user != null) {
			servicekey.userRepresentationUpdate(userg);
			user.setAge(userg.getAge());
			user.setPoid(userg.getPoids());
			user.setTaille(userg.getTaille());
			user.setBirthdate(userg.getBirthdate());
			user.setPhone(userg.getPhone());
			user.setDatetimelastupdate(LocalDate.now());
			if (userg.getCoachpicout() != null)
			user.setPictures(userg.getCoachpic());
			return repository.save(user) != null;

		}
		return false;
	}

	@Override
	@Transactional
	public void updateUser(Users user, String keycloakId) {
		user.setKeycloackuid(keycloakId);
		repository.save(user);
	}

	@Override
	public Users findUser(int idUser) {
		return repository.findByIdusers(idUser);
	}

	@Override
	public List<Userglobal> findUsers() {
		List<Users> users = repository.findAll();
		List<Userglobal> userglob = new ArrayList<Userglobal>();
		for (Users user: users){
			userglob.add(convertorlight(user));
		}
		return userglob;
	}

	@Override
	public List<Users> findclients() {
		List<Users> usersupdated = new ArrayList<>();
		List<Users> users = repository.findAll();
		for (Users user: users)
			if (user.getRole().equals("Client")){
				user.setPicturesList(new ArrayList<>());
				usersupdated.add(user);
			}
		return usersupdated;
	}

	@Override
    @Transactional
	public Users findUserkeycloalkid(String keycloalk) {
		return repository.findByKeycloackuid(keycloalk);
	}

	@Override
	@Transactional
	public Userglobal findUserComplete(String keycloalk) {
		Users user = repository.findByKeycloackuid(keycloalk);
		Userglobal userg = convertor(user);
		if (user.getRole().equals("Client"))
			userg.setPictures(picturesRepository.findByclient(user));
		return userg;
	}
	public Userglobal convertorlight (Users user){
		Userglobal userg = new Userglobal();
		userg.setName(user.getName());
		userg.setSurname(user.getSurname());
		userg.setEmail(user.getUsername());
		userg.setRole(user.getRole());
		userg.setKeycloakkey(user.getKeycloackuid());
		userg.setPhone(user.getPhone());
		userg.setEnabled(user.isEnabled());
		return userg;
	}
	public Userglobal convertor (Users user){
		Userglobal userg = new Userglobal();
		userg.setName(user.getName());
		userg.setSurname(user.getSurname());
		userg.setEmail(user.getUsername());
		userg.setRole(user.getRole());
		userg.setKeycloakkey(user.getKeycloackuid());
		userg.setPhone(user.getPhone());
		userg.setBirthdate(user.getBirthdate());
		userg.setEnabled(user.isEnabled());
		if (user.getRole().equals("Client")){
			userg.setGender(user.getGenre() != null ? user.getGenre().name() : "");
			userg.setDaysworkout(user.getDaysworkout());
			userg.setWorkouthome(user.isWorkouthome());
			userg.setAllergie(user.isAllergie());
			userg.setAllergiedescription(user.getAllergiedescription());
			userg.setSick(user.isSick());
			userg.setSickdescription(user.getSickdescription());
			userg.setPoids(user.getPoid());
			userg.setTaille(user.getTaille());
			userg.setRole(user.getRole());
			userg.setAge(user.getAge());
		}
		else {
			Pictures picture = user.getPictures();
			if (picture != null && (user.getRole().equals("Coach") || user.getRole().equals("Nutritionist")))
				userg.setCoachpicout(picture.getImage());
		}
		return userg;
	}

	@Override
	@Transactional
	public Integer deleteUser(String keycloalk) {
		Users user = findUserkeycloalkid(keycloalk);
		List<UserPackage> userpackage = user.getUserpackage();
		if (userpackage != null && userpackage.isEmpty())   {
			userpackage = userpackage.stream().filter(packages -> packages.isCurrentpackage() && packages.getEnddate().isAfter(LocalDate.now())).collect(Collectors.toList());
			if (!userpackage.isEmpty())  {
				return 4;
			}
		}
		sericepack.deleteuserpackage(userpackage);
		repository.delete(user);
        return 1;
    }
	@Override
	public void delete(int userid){
		repository.deleteById(userid);
	}

	@Override
	public boolean isEmailUsed(String email) {
		return repository.findbyusernamequery(email) != null;
    }

	@Override
	@Transactional
	public boolean buypackage(Buypackage buypackage) {
		try{
			Users user = findUserkeycloalkid(buypackage.getKeycloakclient());
			Optional<UserPackage> userpackage = user.getUserpackage().stream().filter(p -> p.isCurrentpackage()).findFirst();
			if (userpackage.isPresent()){
				sericepack.disableUserpackage(userpackage.get());
			}
			Users coach = null;
			Users nutro = null;
			if (buypackage.getKeycloakcoach() != null){
				coach = findUserkeycloalkid(buypackage.getKeycloakcoach());
			}
			if (buypackage.getKeycloaknutro() != null){
				nutro = findUserkeycloalkid(buypackage.getKeycloaknutro());
			}
			Package pack = servicepackage.findPackage(buypackage.getIdpackage());
			UserPackage newuserpack = new UserPackage();
			newuserpack.setStartdate(LocalDate.now());
			if (pack.getUnitetime().equals(Unitetime.Annuel)){
				newuserpack.setEnddate(LocalDate.now().plusYears(pack.getValidity()));
			}
			else if (pack.getUnitetime().equals(Unitetime.Mensuel)){
				newuserpack.setEnddate(LocalDate.now().plusMonths(pack.getValidity()));
			}
			else {
				newuserpack.setEnddate(LocalDate.now().plusDays(pack.getValidity()));
			}
			newuserpack.setCurrentpackage(true);
			newuserpack.getIduserpackage().setPackagesclient(pack);
			newuserpack.getIduserpackage().setClientpackage(user);
			if (coach !=null) {
				newuserpack.setChoosencoach(coach);
			}
			if (nutro != null){
				newuserpack.setChoosennutro(nutro);
			}
			user.getUserpackage().add(newuserpack);
			return repository.save(user) != null;
		}
		catch (Exception e){
			return false;
		}
	}
	@Override
	public UserPackage findCurrentpackage(String keycloak){
		return sericepack.currentpackage(keycloak);
	}

	@Override
	public List<UserPackage> coachclients(String keycloak){
		return sericepack.findcoachclient(keycloak);
	}

	@Override
	public List<UserPackage> adminclients(){
		return sericepack.findallusershavingcurrentpackages();
	}

    @Override
    public List<UserPackage> nutroclients(String keycloak) {
        return sericepack.findnutroclient(keycloak);
    }
	@Override
	public Usertochoose finduserstochoose(){
		Usertochoose usertochoose = new Usertochoose();
		usertochoose.setCoachs(repository.findByRole("Coach"));
		usertochoose.setNutros(repository.findByRole("Nutrocionist"));
		return usertochoose;
	}
	@Override
	public List<MenuResponse> weeklymenu(String keycloakkey){
		return clientmenuservice.findweeklymeny(keycloakkey);
	}
	@Override
	public List<UserPackage> finduserpackages(String keycloak){
		return sericepack.finduserpackages(keycloak);
	}
}
