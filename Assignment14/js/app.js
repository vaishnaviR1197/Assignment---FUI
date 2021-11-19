function ViewModel(){
    this.todoList = ko.observableArray();
    this.title = ko.observable("");
    this.description = ko.observable("");
    this.addTodo=function(){
        if(this.title!="" &&this.description!=""){
            this.todoList.push({
                title:this.title,
                description:this.description
            })
            this.title="";
            this.description="";
        }
    }.bind(this)

}

const viewModel = new ViewModel();
ko.applyBindings(viewModel);
