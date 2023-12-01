package com.health.fitness.entities;

import javax.persistence.*;

@Entity
public class TimeSpent {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idtimespent;
    @ManyToOne
    private CoachAppointment coachappointment;
    //TBD by @kabiljbali

    public CoachAppointment getCoachappointment() {
        return coachappointment;
    }

    public int getIdtimespent() {
        return idtimespent;
    }

    public void setCoachappointment(CoachAppointment coachappointment) {
        this.coachappointment = coachappointment;
    }

    public void setIdtimespent(int idtimespent) {
        this.idtimespent = idtimespent;
    }
}
