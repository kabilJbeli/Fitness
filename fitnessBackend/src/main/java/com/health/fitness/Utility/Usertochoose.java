package com.health.fitness.Utility;

import com.health.fitness.entities.Users;

import java.util.List;

public class Usertochoose {
    private List<Users> coachs;
    private List<Users> nutros;

    public List<Users> getCoachs() {
        return coachs;
    }

    public void setCoachs(List<Users> coachs) {
        this.coachs = coachs;
    }

    public List<Users> getNutros() {
        return nutros;
    }

    public void setNutros(List<Users> nutros) {
        this.nutros = nutros;
    }
}
