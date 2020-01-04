/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
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
@WebService(serviceName = "WSPedido")
@Stateless()
public class WSPedido {

    @EJB
    private ProductoFacade productoFacade;

    @EJB
    private UsuarioFacade usuarioFacade;

    @EJB
    private PedidoFacade ejbRef;// Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Web Service Operation")

    
    /**
     * Web service operation
     * @param id_producto
     * @param id_usuario
     * @param tarjeta
     * @param costo_total
     * @param cantidad
     * @return 
     */
    @WebMethod(operationName = "altaPedido")
    public int altaPedido(@WebParam(name = "id_producto") int id_producto, @WebParam(name = "id_usuario") int id_usuario, @WebParam(name = "tarjeta") String tarjeta, @WebParam(name = "costo_total") double costo_total, @WebParam(name = "cantidad") int cantidad) {
        Pedido objPed = new Pedido();
        int idPedido = -1;
        Usuario objCli = new Usuario();
        Producto objProd = new Producto();
        
        objCli.setIdUsuario(id_usuario);
        objProd.setIdProducto(id_producto);
        
        Usuario us = usuarioFacade.getUserInfo(objCli);
        Producto pr = productoFacade.getProductInfo(objProd);  

        if(us != null && pr != null) {
            idPedido = ejbRef.count() + 1;
            
            objPed.setIdPedido(idPedido);
            objPed.setCantidad(cantidad);
            objPed.setCostoTotal(costo_total);
            objPed.setTarjeta(tarjeta);  
            objPed.setIdUsuario(us);
            objPed.setIdProducto(pr);
            
            ejbRef.create(objPed);
        }
               
        return idPedido;
    }

    /**
     * Web service operation
     * @param id_pedido
     * @param fecha_entrega
     * @return 
     * @throws java.text.ParseException 
     */
    @WebMethod(operationName = "enviarPedido")
    public boolean enviarPedido(@WebParam(name = "id_pedido") int id_pedido, @WebParam(name = "fecha_entrega") String fecha_entrega) throws ParseException {
        Pedido objPed = new Pedido();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
	Date date = sdf.parse(fecha_entrega);
        
        objPed.setIdPedido(id_pedido);
        objPed.setFechaEntrega(date);
        
        return ejbRef.updateFechaEntrega(objPed);
    }

    /**
     * Web service operation
     * @param id_usuario
     * @return 
     */
    @WebMethod(operationName = "pedidosPorUsuario")
    public java.util.List<Pedido> pedidosPorUsuario(@WebParam(name = "id_usuario") int id_usuario) {
        Usuario objUs = usuarioFacade.find((Object) id_usuario);
        
        return usuarioFacade.getPedidosByUsuario(objUs);
    }

}
