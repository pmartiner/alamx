package ejb;

import ejb.Pedido;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2019-12-20T13:02:13")
@StaticMetamodel(Usuario.class)
public class Usuario_ { 

    public static volatile SingularAttribute<Usuario, String> apellidos;
    public static volatile SingularAttribute<Usuario, String> estado;
    public static volatile SingularAttribute<Usuario, Integer> numExt;
    public static volatile SingularAttribute<Usuario, String> municipio;
    public static volatile SingularAttribute<Usuario, Integer> idUsuario;
    public static volatile SingularAttribute<Usuario, String> calle;
    public static volatile SingularAttribute<Usuario, String> cp;
    public static volatile SingularAttribute<Usuario, String> nombres;
    public static volatile SingularAttribute<Usuario, String> colonia;
    public static volatile SingularAttribute<Usuario, Integer> numInt;
    public static volatile SingularAttribute<Usuario, String> ciudad;
    public static volatile SingularAttribute<Usuario, String> correo;
    public static volatile SingularAttribute<Usuario, String> contrasena;
    public static volatile CollectionAttribute<Usuario, Pedido> pedidoCollection;
    public static volatile SingularAttribute<Usuario, String> telefono;

}