export const initialState={
    basket:[],
    user:{}
};

export const reducer=(state=initialState,action)=>{
    console.log("state",state);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
          
        case 'REMOVE_FROM_BASKET':
            let currentState=state.basket.filter(e=>e.id !==action.item.id);
            return {...state,basket:[...currentState]};
           
        default:
            return state;
    }
}