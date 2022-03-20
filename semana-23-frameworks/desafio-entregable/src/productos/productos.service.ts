import { Injectable } from '@nestjs/common';
import { Producto } from 'src/interfaces/producto.interface';


@Injectable()
export class ProductosService {
    private productos: Producto[] = [];
    private id = 0;

    create(producto: Producto) {
        this.productos.push({ ...producto, id: this.id });
        this.id++;
    }

    findAll(): Producto[] {
        return this.productos;
    }

    findOneById(id: number): Producto {
        return this.productos.find(producto => producto.id === id);
    }

    deleteOneById(id: number): String {
        this.productos = this.productos.filter(producto => producto.id !== id); 
        return 'Producto id: ' + id + ' eliminado';
    }
}
