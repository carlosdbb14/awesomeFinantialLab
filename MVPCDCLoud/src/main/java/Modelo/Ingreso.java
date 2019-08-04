/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

/**
 *
 * @author LENOVO
 */
public class Ingreso {
    private String categoria;
    private int monto;
    private String descripcion;

    public Ingreso(String categoria, int monto, String descripcion) {
        this.categoria = categoria;
        this.monto = monto;
        this.descripcion = descripcion;
    }

    

    public Ingreso() {
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public int getMonto() {
        return monto;
    }

    public void setMonto(int monto) {
        this.monto = monto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    
   
    
    
}
