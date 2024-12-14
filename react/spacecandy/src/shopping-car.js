// InventoryManager.js
class InventoryManager {
    static #instance = null; // Propiedad estática para la única instancia
    #products = {}; // Diccionario privado para almacenar productos
    #function = null;

    // Constructor privado para evitar instanciación directa
    constructor() {
        if (InventoryManager.#instance) {
            throw new Error("Use InventoryManager.getInstance() to get the single instance.");
        }
        console.log("Singleton InventoryManager instance created");
    }

    // Método estático para obtener la única instancia
    static getInstance() {
        if (!InventoryManager.#instance) {
            InventoryManager.#instance = new InventoryManager();
        }
        return InventoryManager.#instance;
    }

    setFunction(f){
        this.#function = f
    }

    // Agregar o actualizar un producto con una cantidad
    addProduct(name, quantity, price) {
        if (quantity <= 0) {
            console.log("Quantity must be greater than 0.");
            return;
        }
        if (this.#products[name]) {
            this.#products[name]['quantity'] += quantity; // Incrementa la cantidad si ya existe
        } else {
            this.#products[name] = {
                'quantity': quantity,
                'price': price
            }; // Crea el producto si no existe
        }
        this.#function(this.#products)
    }

    // Quitar una unidad de un producto
    removeProduct(name) {
        if (!this.#products[name]) {
            console.log(`Product "${name}" does not exist.`);
            return;
        }
        if (this.#products[name]['quantity'] > 0) {
            this.#products[name]['quantity'] -= 1;
        } else {
            console.log(`No stock left for "${name}".`);
        }

        // Elimina el producto si la cantidad llega a 0
        if (this.#products[name]['quantity'] === 0) {
            delete this.#products[name];
            console.log(`"${name}" has been removed from inventory.`);
        }
        this.#function(this.#products)
    }

    // Mostrar el inventario actual
    getProducts() {
        return this.#products
    }
}

export default InventoryManager;
