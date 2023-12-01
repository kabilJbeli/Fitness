package com.health.fitness.Utility;

import java.util.ArrayList;
import java.util.List;

public class RepasResponse {
    String label;
    List<String> ingredients = new ArrayList<>();
    int order;
    public List<String> getIngredients() {
        return ingredients;
    }
    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }
    public String getLabel() {
        return label;
    }
    public void setLabel(String label) {
        this.label = label;
    }
    public int getOrder() {
        return order;
    }
    public void setOrder(int order) {
        this.order = order;
    }
}
