(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"printer-details"]     ={url:H+"/business/pronter-details/page.html",prefix:p,router:1};
})();
