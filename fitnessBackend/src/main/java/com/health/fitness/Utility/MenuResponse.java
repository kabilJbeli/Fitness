package com.health.fitness.Utility;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class MenuResponse {
    LocalDate datemenu;
    List<RepasResponse> repas = new ArrayList<>();

    public List<RepasResponse> getRepas() {
        return repas;
    }
    public void setRepas(List<RepasResponse> repas) {
        this.repas = repas;
    }
    public LocalDate getDatemenu() {
        return datemenu;
    }
    public void setDatemenu(LocalDate datemenu) {
        this.datemenu = datemenu;
    }
}
