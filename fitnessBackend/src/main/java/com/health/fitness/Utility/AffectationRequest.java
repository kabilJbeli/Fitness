package com.health.fitness.Utility;

import com.health.fitness.entities.ExerciceSportif;

import java.time.LocalDate;
import java.util.List;

public class AffectationRequest {
    private List<ExerciceSportif> listexercice;
    private String client;
    private String description;
    private LocalDate startdate;
    private LocalDate enddate;
    public String getClient() {
        return client;
    }
    public void setClient(String client) {
        this.client = client;
    }
    public List<ExerciceSportif> getListexercice() {
        return listexercice;
    }
    public void setListexercice(List<ExerciceSportif> listexercice) {
        this.listexercice = listexercice;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
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
}
