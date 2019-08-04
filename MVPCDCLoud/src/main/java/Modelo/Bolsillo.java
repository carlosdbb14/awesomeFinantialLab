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
public class Bolsillo {
    private String nombre;
    private int monto;

    public Bolsillo() {
    }
    
    

    public Bolsillo(String nombre, int monto) {
        this.nombre = nombre;
        this.monto = monto;
    }
    
    public void añadirMonto(int monto){
        this.monto = this.monto + monto;
    }
    
    public void restarMonto(int monto){
        this.monto = this.monto - monto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getMonto() {
        return monto;
    }

    public void setMonto(int monto) {
        this.monto = monto;
    }
    
    
}
