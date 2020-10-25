function LoadPostInfo(){
    return $.get('https://private-anon-fe2f4e1869-wad20postit.apiary-mock.com/posts'), function(response){
        $("id").html(response);
        log("success")


    }
}