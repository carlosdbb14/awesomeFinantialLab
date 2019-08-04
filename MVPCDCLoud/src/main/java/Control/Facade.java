/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;

import Cloudant.ConexionCloudant;
import Modelo.Mision;
import Modelo.Usuario;
import com.google.gson.Gson;
import java.net.MalformedURLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author LENOVO
 */
public class Facade {
    ConexionCloudant cloud;
    Usuario usuario;
    private static Facade ui= null;
    
    public static Facade instancia(){
        if(ui == null){
            ui = new Facade();
        }
        return ui;
    }
    public void accederCloud(){
        try {
            cloud = ConexionCloudant.cloudant();
        } catch (MalformedURLException ex) {
            Logger.getLogger(Facade.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
    public void crearUsuario(String nombre, String telefono, String documento, String nacimiento){
        try {
            usuario = new Usuario(nombre,telefono,documento,nacimiento);
            cloud.anadirUsuario(usuario);
            usuario = cloud.recuperarUsuario(documento);
        } catch (Exception ex) {
            Logger.getLogger(Facade.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void accederUsuario(String documento){
        try {
            usuario = cloud.recuperarUsuario(documento);
        } catch (Exception ex) {
            Logger.getLogger(Facade.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void guardarCambios(String json){
        try {
            Gson js = new Gson();
            usuario = js.fromJson(json, Usuario.class);
            cloud.modificarUsuario(usuario);
        } catch (Exception ex) {
            Logger.getLogger(Facade.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void crearMeta(String nombre, String fecha, String categoria, int monto, String descripcion){
        usuario.crearMeta(nombre, fecha, categoria, monto, descripcion);
    }
    
    public void crearIngreso(String categoria, int monto, String descripcion){
        usuario.crearIngreso(categoria, monto, descripcion);
    }
    
    public void crearGasto(String categoria, int monto, String descripcion){
        usuario.crearGasto(categoria, monto, descripcion);
    }
    
    public void crearBolsillo(String nombre, int monto){
        usuario.crearBolsillo(nombre, monto);
    }
    
    public void ingresaraBolsillo(String nombre, int monto){
        usuario.ingresaraBolsillo(nombre, monto);
    }
    
    public void gastarDeBolsillo(String nombre, int monto){
         usuario.gastarDeBolsillo(nombre, monto);
    }
    
    public void iniciarMision(String nombre){
        usuario.iniciarMision(nombre);
    }
    
    public void terminarMision(String nombre){
       usuario.terminarMision(nombre);
    }
    
    public void agregarMision(Mision mision){
        usuario.agregarMision(mision);
    }
    
    public String json(){
        Gson js = new Gson();
        return js.toJson(usuario);
    }
}
