/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejb;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author Pablo
 */
@Stateless
public class ProductoFacade extends AbstractFacade<Producto> {

    @PersistenceContext(unitName = "EJBPedidoPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public ProductoFacade() {
        super(Producto.class);
    }
    
    public Producto getProductInfo(Producto pr) {
        Producto producto = null;
        String queryStr;
        try {
            queryStr = "SELECT p FROM Producto p WHERE p.idProducto = ?1";
            Query query = getEntityManager().createQuery(queryStr);
            query.setParameter(1, pr.getIdProducto());
            List<Producto> lista = query.getResultList();
            if(!lista.isEmpty())
                producto = lista.get(0);
        }
        catch (Exception e){
            throw e;
        }
        
        return producto;
    }
    
}
