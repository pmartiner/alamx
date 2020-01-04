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
public class UsuarioFacade extends AbstractFacade<Usuario> {

    @PersistenceContext(unitName = "EJBPedidoPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UsuarioFacade() {
        super(Usuario.class);
    }
    
    public Usuario getUserInfo(Usuario us) {
        Usuario usuario = null;
        String queryStr;
        try {
            queryStr = "SELECT u FROM Usuario u WHERE u.idUsuario = ?1";
            Query query = getEntityManager().createQuery(queryStr);
            query.setParameter(1, us.getIdUsuario());
            List<Usuario> lista = query.getResultList();
            if(!lista.isEmpty())
                usuario = lista.get(0);
        }
        catch (Exception e){
            throw e;
        }
        
        return usuario;
    }
    
    public List<Pedido> getPedidosByUsuario(Usuario u) {
        List<Pedido> lista;
        String queryStr;
        try {
            queryStr = "SELECT p FROM Pedido p WHERE p.idUsuario = ?1 ORDER BY p.fechaEntrega DESC";
            Query query = getEntityManager().createQuery(queryStr);
            query.setParameter(1, u);
            lista = query.getResultList();
        }
        catch (Exception e){
            throw e;
        }
        
        return lista;
    }
}
