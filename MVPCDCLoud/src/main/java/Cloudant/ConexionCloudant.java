/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Cloudant;

import Modelo.Usuario;
import com.cloudant.client.api.ClientBuilder;
import com.cloudant.client.api.CloudantClient;
import com.cloudant.client.api.Database;
import java.net.MalformedURLException;
import java.net.URL;

/**
 *
 * @author LENOVO
 */
public class ConexionCloudant {
    private CloudantClient client;
    private Database db;
    private String username = "c62ce598-a111-4583-a4fe-4ff1af5acc79-bluemix";
    private String password = "1211a675fcdd2375495e4def8098286ccee544bf5ced60781eae289e3cbc534c";
    private String url = "https://c62ce598-a111-4583-a4fe-4ff1af5acc79-bluemix:1211a675fcdd2375495e4def8098286ccee544bf5ced60781eae289e3cbc534c@c62ce598-a111-4583-a4fe-4ff1af5acc79-bluemix.cloudantnosqldb.appdomain.cloud";
    private static ConexionCloudant ui = null;
    
    public static ConexionCloudant cloudant() throws MalformedURLException{
        if(ui  == null){
            ui = new ConexionCloudant();
        }
        return ui;
    }
    
    private ConexionCloudant() throws MalformedURLException{
        this.client = connect();
    }
    
    private CloudantClient connect() throws MalformedURLException{
        CloudantClient client = ClientBuilder.url(new URL(url)).username(username).password(password).build();
        return client;
    }
    
    public void añadirDatabase(String name){
        client.createDB(name);
        db = client.database(name, false);
    }
    
    public void borrarDatabase(String name){
        client.deleteDB(name);
    }
    
    public void anadirUsuario(Usuario usuario) throws Exception{
        if(db == null) throw new Exception("no ha definido una base de datos");
        
        db.save(usuario);
        
    }
    
     public void modificarUsuario(Usuario usuario) throws Exception{
        if(db == null) throw new Exception("no ha definido una base de datos");
        
        db.update(usuario);
        
    }
     
    public Usuario recuperarUsuario(String id) throws Exception{
        if(db == null) throw new Exception("no ha definido una base de datos");
        Usuario u = db.find(Usuario.class, id);
        return u;
    }
    
    public void seleccionarDatabase(String name){
        db = client.database(name, true);
    }
    
    
}
