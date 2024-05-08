function add(){
    if(item.value){
      result.innerHTMl += `<li>${item.value}</li>`
    }else{
        empty.innerHTMl='Add your list !!!!!!'
    }
}
add()