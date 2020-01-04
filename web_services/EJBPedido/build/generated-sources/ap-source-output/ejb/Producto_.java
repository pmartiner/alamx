package ejb;

import ejb.Pedido;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2019-12-20T13:02:13")
@StaticMetamodel(Producto.class)
public class Producto_ { 

    public static volatile SingularAttribute<Producto, String> historia;
    public static volatile SingularAttribute<Producto, Double> precio;
    public static volatile SingularAttribute<Producto, String> foto;
    public static volatile SingularAttribute<Producto, String> detalles;
    public static volatile SingularAttribute<Producto, Integer> idProducto;
    public static volatile CollectionAttribute<Producto, Pedido> pedidoCollection;
    public static volatile SingularAttribute<Producto, String> nombre;

}