/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.util.ArrayList;
import java.util.Objects;

/**
 *
 * @author LENOVO
 */
public class Usuario {
    private String nombre;
    private String telefono;
    private String _id;
    private String _rev;
    private String nacimiento;
    private ArrayList<Ingreso> ingresos;
    private ArrayList<Gasto> gastos;
    private ArrayList<Meta> metas;
    private ArrayList<Bolsillo> bolsillos;
    private ArrayList<Mision> misiones;

    public Usuario() {
    }
    
    

    public Usuario(String nombre, String telefono, String documento, String nacimiento) {
        this.nombre = nombre;
        this.telefono = telefono;
        this._id = documento;
        this.nacimiento = nacimiento;
        this.ingresos = new ArrayList<Ingreso>();
        this.gastos= new ArrayList<Gasto>();
        this.metas = new ArrayList<Meta>();
        this.bolsillos = new ArrayList<Bolsillo>();
        this.misiones = new ArrayList<Mision>();
    }

    
    public void crearMeta(String nombre, String fecha, String categoria, int monto, String descripcion){
        metas.add(new Meta(nombre, fecha, categoria, monto, descripcion));
    }
    
    public void crearIngreso(String categoria, int monto, String descripcion){
        ingresos.add(new Ingreso(categoria, monto, descripcion));
    }
    
    public void crearGasto(String categoria, int monto, String descripcion){
        gastos.add(new Gasto(categoria, monto, descripcion));
    }
    
    public void crearBolsillo(String nombre, int monto){
        bolsillos.add(new Bolsillo(nombre, monto));
    }
    
    public void ingresaraBolsillo(String nombre, int monto){
        for(Bolsillo b: bolsillos){
            if(b.getNombre().equals(nombre)){
                b.añadirMonto(monto);
            }
        }
    }
    
    public void gastarDeBolsillo(String nombre, int monto){
         for(Bolsillo b: bolsillos){
            if(b.getNombre().equals(nombre)){
                b.restarMonto(monto);
            }
        }
    }
    
    public void iniciarMision(String nombre){
        for(Mision m: misiones){
            if(m.getNombre().equals(m)){
                m.setStatus(Mision.Estado.INICIADO);
            }
        }
    }
    
    public void terminarMision(String nombre){
        for(Mision m: misiones){
            if(m.getNombre().equals(m)){
                m.setStatus(Mision.Estado.FINALIZADO);
            }
        }
    }

    public String getRev() {
        return _rev;
    }

    public void setRev(String _rev) {
        this._rev = _rev;
    }
    
    
    
    public void agregarMision(Mision mision){
        misiones.add(mision);
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getId() {
        return _id;
    }

    public void setId(String id) {
        this._id = id;
    }

    public String getNacimiento() {
        return nacimiento;
    }

    public void setNacimiento(String nacimiento) {
        this.nacimiento = nacimiento;
    }

    public ArrayList<Ingreso> getIngresos() {
        return ingresos;
    }

    public void setIngresos(ArrayList<Ingreso> ingresos) {
        this.ingresos = ingresos;
    }

    public ArrayList<Gasto> getGastos() {
        return gastos;
    }

    public void setGastos(ArrayList<Gasto> gastos) {
        this.gastos = gastos;
    }

    public ArrayList<Mision> getMisiones() {
        return misiones;
    }

    public void setMisiones(ArrayList<Mision> misiones) {
        this.misiones = misiones;
    }

    

    public ArrayList<Meta> getMetas() {
        return metas;
    }

    public void setMetas(ArrayList<Meta> metas) {
        this.metas = metas;
    }

    public ArrayList<Bolsillo> getBolsillos() {
        return bolsillos;
    }

    public void setBolsillos(ArrayList<Bolsillo> bolsillos) {
        this.bolsillos = bolsillos;
    }

    

    
    
}
