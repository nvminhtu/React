function actionIsAdding(){
    return {type:'TOGGLE_IS_ADDING'};
}
function actionDeleteItem(index){
     return  {type:'DELETE_ITEM',index:index};
}
function actionAddItem(item){
     return  {type:'ADD_ITEM',item:item};
}

export {actionIsAdding,actionDeleteItem,actionAddItem};








































