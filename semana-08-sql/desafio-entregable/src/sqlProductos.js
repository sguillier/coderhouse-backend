import knexLib from 'knex'

class ClienteSqlProductos {
  constructor(options, tableName) {
    this.knex = knexLib(options)
    this.tableName = tableName
  }

  crearTabla() {
    return this.knex.schema.dropTableIfExists(this.tableName)
      .finally(() => {
        return this.knex.schema.createTable(this.tableName, table => {
          table.increments('id').primary();
          table.string('nombre', 50).notNullable();
          table.float('precio').notNullable;
          table.string('url', 100).notNullable();
          table.string('codigo', 10);
          table.integer('stock');
        })
      })
  }

  pushItems(items) {
    return this.knex(this.tableName).insert(items)
  }

  getItems() {
    return this.knex(this.tableName).select('*')
  }

  deleteItemById(id) {
    return this.knex.from(this.tableName).where('id', id).del()
  }

  // actualizarStockPorId(stock, id) {
  //   return this.knex.from(this.tableName).where('id', id).update({ stock: stock })
  // }

  close() {
    this.knex.destroy();
  }
}

export default ClienteSqlProductos