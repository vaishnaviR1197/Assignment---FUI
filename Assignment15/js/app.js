$(function(){
            
    $("button").on("click", ()=>{
        let title = $("#title").val();
        let description = $("#description").val();
        let unList = $("#unList")
        let li = document.createElement("li");
        const ToDo = {
            title:title,
            desc:description
        }
        li.innerHTML = JSON.stringify(ToDo)
        unList.append(li);
    })
        
})