export const initialState={
    basket:[],
    user:{}
};

export const reducer=(state=initialState,action)=>{
    console.log("state",state);
    switch(action.type){
        case 'ADD_TO_BASKET':
            const product=state.basket.find(e=>e.id===action.item.id);
            if(product){
                return{
                    ...state,basket:[...state.basket.map(e=>e.id===product.id?action.item:e)]
                }
            }else{
                return {
                    ...state,
                    basket:[...state.basket,action.item]
                };
            }
              
        case 'REMOVE_FROM_BASKET':
            let currentState=state.basket.filter(e=>e.id !==action.id);
            return {...state,basket:[...currentState]};
           
        default:
            return state;
    }
}