/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Cloudant;

import Modelo.Mision;
import Modelo.Usuario;
import com.cloudant.client.api.ClientBuilder;
import com.cloudant.client.api.CloudantClient;
import static com.google.gson.internal.bind.TypeAdapters.URL;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author LENOVO
 */
public class pruebas {
    public static void main(String[] args) throws MalformedURLException{
        
            
            /*String username = "c62ce598-a111-4583-a4fe-4ff1af5acc79-bluemix";
            String password = "1211a675fcdd2375495e4def8098286ccee544bf5ced60781eae289e3cbc534c";
            String url = "https://c62ce598-a111-4583-a4fe-4ff1af5acc79-bluemix:1211a675fcdd2375495e4def8098286ccee544bf5ced60781eae289e3cbc534c@c62ce598-a111-4583-a4fe-4ff1af5acc79-bluemix.cloudantnosqldb.appdomain.cloud";
            
            String dat;
            CloudantClient client = ClientBuilder.url(new URL(url)).username(username).password(password).build();
            dat = "Server Version: " + client.serverVersion();
            List<String> databases = client.getAllDbs();
            dat = dat + "All my databases : \n";
            for ( String db : databases ) {
                dat = dat + db + "\n";
            }
            JOptionPane.showMessageDialog(null, dat);*/
            
            try {
            ConexionCloudant cloud = ConexionCloudant.cloudant();
            Usuario usuario = new Usuario("carlos", "123", "456", "oct 98");
            usuario.crearIngreso("salario", 2000000, "salario");
            usuario.crearGasto("bebidas", 3200, "quatro");
            usuario.agregarMision(new Mision("m1", "pague plata", "mañana"));
            usuario.agregarMision(new Mision("m1", "mercado", "pasado mañana"));
            cloud.seleccionarDatabase("databasecarlos");
            cloud.anadirUsuario(usuario);
            usuario = cloud.recuperarUsuario("456");
            usuario.crearIngreso("salario", 2000000, "salario");
            usuario.crearGasto("bebidas", 3200, "quatro");
            cloud.modificarUsuario(usuario);
            } catch (Exception ex) {
            Logger.getLogger(pruebas.class.getName()).log(Level.SEVERE, null, ex);
            }
        /*try {    
            ConexionCloudant cloud = ConexionCloudant.cloudant();
            //cloud.seleccionarDatabase("databasecarlos");
            cloud.borrarDatabase("databasecarlos");
            //Usuario U= cloud.recuperarUsuario("456");
            //JOptionPane.showMessageDialog(null, U.getNombre());
        } catch (Exception ex) {
            Logger.getLogger(pruebas.class.getName()).log(Level.SEVERE, null, ex);
        }*/
        
    }
}
