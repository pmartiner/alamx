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
public class PedidoFacade extends AbstractFacade<Pedido> {

    @PersistenceContext(unitName = "EJBPedidoPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public PedidoFacade() {
        super(Pedido.class);
    }
    
    public boolean updateFechaEntrega(Pedido pe) {
        boolean didUpdate = false;
        String queryStr;
        try {
            queryStr = "UPDATE Pedido SET fechaEntrega = ?1 WHERE idPedido = ?2";
            Query query = getEntityManager().createQuery(queryStr);
            query.setParameter(1, pe.getFechaEntrega());
            query.setParameter(2, pe.getIdPedido());
            int lista = query.executeUpdate();
            if(lista > 0)
                didUpdate = true;
        }
        catch (Exception e){
            throw e;
        }
        
        return didUpdate;
    }
}
