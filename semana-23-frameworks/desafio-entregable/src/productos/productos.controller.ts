import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { Producto } from 'src/interfaces/producto.interface';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) { }

    @Post()
    async create(@Body() createProductoDto: CreateProductoDto) {
        this.productosService.create(createProductoDto);
    }

    @Get()
    async findAll(): Promise<Producto[]> {
        return this.productosService.findAll();
    }

    @Get('/:id')
    async findOneById(@Param() params: { id: string }): Promise<Producto> {
        const id = parseInt(params.id);
        return this.productosService.findOneById(id);
    }

    @Delete('/:id')
    async deleteOneById(@Param() params: { id: string }): Promise<String> {
        const id = parseInt(params.id);
        return this.productosService.deleteOneById(id);
    }
}
