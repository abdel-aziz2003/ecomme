// L'AJOUT DES PRODUITS A A CARTE   

export const AjoutCart = (product)=>{
    return {
        type: "AjoutProduct",
        payload: product,
    }
} ;



// LA SUPRESSIONDU PRODUIT DE LA CART
export const SupressionCart = (product)=>{
    return {
        type: "SupressionProduct",
        payload: product
    }
};
