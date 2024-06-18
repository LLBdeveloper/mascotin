class CasosManager {
    constructor() {
        this.casos = [];
        this.currentId = 1;
    }

    getAllCasos() {
        return this.casos;
    }

    addCaso(casoData) {
        const { title, description, code,  stock, category, thumbnails } = casoData;

        if (!title || !description || !code || !stock || !category) {
            throw new Error("Todos los campos son obligatorios, excepto thumbnails.");
        }

        const newCaso = {
            id: this.currentId++,
            title,
            description,
            code,
            status: true, // Status es true por defecto
            stock,
            category,
            thumbnails: thumbnails || [] // Si no se proporciona thumbnails, se inicializa como un array vacío
        };

        this.casos.push(newCaso);
        return newCaso;
    }
}

export default CasosManager;
