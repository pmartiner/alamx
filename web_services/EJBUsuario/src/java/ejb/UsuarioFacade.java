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

    @PersistenceContext(unitName = "EJBUsuarioPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UsuarioFacade() {
        super(Usuario.class);
    }
    
    public Usuario login(Usuario us) {
        Usuario usuario = null;
        String queryStr;
        try {
            queryStr = "SELECT u FROM Usuario u WHERE u.correo = ?1 AND u.contrasena = ?2";
            Query query = getEntityManager().createQuery(queryStr);
            query.setParameter(1, us.getCorreo());
            query.setParameter(2, us.getContrasena());
            List<Usuario> lista = query.getResultList();
            if(!lista.isEmpty())
                usuario = lista.get(0);
        }
        catch (Exception e){
            throw e;
        }
        
        return usuario;
    }
    
    public int checkEmail(Usuario us) {
        String queryStr;
        int listaSize = 0;
        try {
            queryStr = "SELECT u FROM Usuario u WHERE u.correo = ?1";
            Query query = getEntityManager().createQuery(queryStr);
            query.setParameter(1, us.getCorreo());
            List<Usuario> lista = query.getResultList();
            listaSize = lista.size();
        }
        catch (Exception e){
            throw e;
        }
        
        return listaSize;
    }
}
