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
public class Mision {
    private String nombre;
    private String descripion;
    private String terminacion;
    private Estado status;
    
    public enum Estado{
        CREADO,
        INICIADO,
        FINALIZADO
    }

    public Mision() {
    }

    
    
    public Mision(String nombre, String descripion, String terminacion) {
        this.nombre = nombre;
        this.descripion = descripion;
        this.terminacion = terminacion;
        this.status = Estado.CREADO;
    }
    

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripion() {
        return descripion;
    }

    public void setDescripion(String descripion) {
        this.descripion = descripion;
    }

    public String getTerminacion() {
        return terminacion;
    }

    public void setTerminacion(String terminacion) {
        this.terminacion = terminacion;
    }

    public Estado getStatus() {
        return status;
    }

    public void setStatus(Estado status) {
        this.status = status;
    }
    
}
