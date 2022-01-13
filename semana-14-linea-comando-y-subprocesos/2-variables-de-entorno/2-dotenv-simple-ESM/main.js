
import dotenv from 'dotenv'

dotenv.config({
  path:'data.env',
})

const var1 = process.env.VAR1
console.log('var1:', var1)

const var2 = process.env.VAR2
console.log('var2:', var2)

const var3 = process.env.var3
console.log('var3:', var3)
