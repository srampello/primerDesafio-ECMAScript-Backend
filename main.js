class ProductManager {
    constructor(){
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock){

        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                return;
            }
        }
        
        const newProduct = {
            title, 
            description,
            price, 
            thumbnail, 
            code, 
            stock
        }

        if (!Object.values(newProduct).includes(undefined)) {
            ProductManager.id++
                this.products.push({
                    ...newProduct,
                    id: ProductManager.id 
                });
        }else{
            console.log("Todos los campos son Requeridos")
        }

    }

    getProduct(){
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id))
    }
}

// Arreglo vacio
const productos = new ProductManager

// Agrego productos
productos.addProduct('producto prueba 1', 'Este es un producto prueba 1', 'Sin imagen', 200 , 'abc123', 25)
productos.addProduct('producto prueba 2', 'Este es un producto prueba 2', 'Sin imagen', 350 , 'abc124', 15)

// Arreglo con productos
console.log(productos.getProduct());

// Validacion de Code repetido
productos.addProduct('producto prueba 3', 'Este es un producto prueba 3', 'Sin imagen', 887 , 'abc124', 15)
productos.addProduct('producto prueba 4', 'Este es un producto prueba 4', 'Sin imagen', 765 , 'abc125', 15)


console.log("-------------------------------")
console.log(productos.getProduct());
console.log("-------------------------------")
// Busqueda de producto por ID
console.log("Busqueda de producto: ")
productos.getProductById(2);

// Busqueda por ID no encotrado
productos.getProductById(5);
