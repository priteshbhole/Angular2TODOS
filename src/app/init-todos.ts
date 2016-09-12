export class Init{
    load(){
        if(localStorage.getItem('todos')=== null || localStorage.getItem('todos')===undefined){
            console.log('no Todos Found..Creating..');
            var todos= [
                {
                 text: 'task1'   
                },
                {
                 text: 'task2'   
                },
                {
                 text: 'task3'   
                }
            ];
            localStorage.setItem('todos',JSON.stringify(todos));
            return
        }else {
            console.log('Found Todos....');
        }
    }
}