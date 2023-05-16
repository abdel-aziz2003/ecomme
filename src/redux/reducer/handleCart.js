
const Cart = [];

const handleCart= (state = Cart ,action)=> {
    const product = action.payload
    switch (action.type) {
        case 'AjoutProduct':
            const exist = state.find((x)=> x.id === product.id);
            if (exist) {
                //incrementer la Quantité (qun)
                return state.map((x)=>
                x.id === product.id ? {...x, qun: x.qun + 1 } :x
                ); 
            } else {
                const product = action.payload;
                return [
                    ...state , {
                        ...product,
                        qun:1,
                    }
                ]
            }       
            break;
        case 'SupressionProduct':
            const exist_1 = state.find((x)=> x.id ===product.id);
            if(exist_1.qun ===1){
                return state.filter((x)=> x.id !== exist_1.id)
            } else {
                return state.map((x)=>
                x.id === product.id ? {...x, qun : x.qun - 1} : 1
                )
            }

    
        default:
            return state;
    }
}

export default handleCart;
