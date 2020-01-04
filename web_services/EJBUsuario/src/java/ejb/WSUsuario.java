/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb;

import java.util.List;
import javax.ejb.EJB;
import javax.jws.WebService;
import javax.ejb.Stateless;
import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author Pablo
 */
@WebService(serviceName = "WSUsuario")
@Stateless()
public class WSUsuario {

    @EJB
    private UsuarioFacade ejbRef;// Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Web Service Operation")

        
    /**
     * Web service operation
     * @param nombres
     * @param apellidos
     * @param telefono
     * @param correo
     * @param estado
     * @param calle
     * @param num_ext
     * @param contrasena
     * @param colonia
     * @param municipio
     * @param cp
     * @param ciudad
     * @param num_in
     * @return 
     */
    @WebMethod(operationName = "altaUsuario")
    public int altaUsuario(
            @WebParam(name = "nombres") String nombres, 
            @WebParam(name = "apellidos") String apellidos, 
            @WebParam(name = "telefono") String telefono, 
            @WebParam(name = "correo") String correo, 
            @WebParam(name = "contrasena") String contrasena, 
            @WebParam(name = "calle") String calle, 
            @WebParam(name = "num_ext") int num_ext, 
            @WebParam(name = "num_in") int num_in, 
            @WebParam(name = "colonia") String colonia, 
            @WebParam(name = "municipio") String municipio, 
            @WebParam(name = "cp") String cp, 
            @WebParam(name = "ciudad") String ciudad, 
            @WebParam(name = "estado") String estado
    ) {
        
        Usuario objCli = new Usuario();
        int intIdUsuario = ejbRef.count()+1;
        System.out.println("Params: " + estado + ", " + nombres);
        objCli.setIdUsuario(intIdUsuario);
        objCli.setNombres(nombres);
        objCli.setApellidos(apellidos);
        objCli.setTelefono(telefono);
        objCli.setCorreo(correo);
        objCli.setContrasena(contrasena);
        objCli.setCalle(calle);
        objCli.setNumExt(num_ext);
        objCli.setNumInt(num_in);
        objCli.setColonia(colonia);
        objCli.setMunicipio(municipio);
        objCli.setCp(cp);
        objCli.setCiudad(ciudad);
        objCli.setEstado(estado);
        
        if(ejbRef.checkEmail(objCli) > 0)
            intIdUsuario = -1;
        else 
            ejbRef.create(objCli);
        
        return intIdUsuario;
    }

    /**
     * Web service operation
     * @param correo
     * @param contrasena
     * @return 
     */
    @WebMethod(operationName = "login")
    public int login(@WebParam(name = "correo") String correo, @WebParam(name = "contrasena") String contrasena) {
        Usuario objCli = new Usuario();
        int idUsuario = -1;
        
        objCli.setCorreo(correo);
        objCli.setContrasena(contrasena);
        
        Usuario us = ejbRef.login(objCli);
        if(us != null) 
            idUsuario = us.getIdUsuario();     
        
        return idUsuario;
    }
    
}
