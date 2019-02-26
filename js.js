function bold(){
    var x=document.getElementsByClassName('présentation');
    for (i=0;i<x.length;i++){
    x[i].style.fontWeight='bold'}}
    
    function italic(){
        var x=document.getElementsByClassName('présentation');
        for (i=0;i<x.length;i++){
        x[i].style.fontStyle='italic'}}
        function underlined(){
            var x=document.getElementsByClassName('présentation');
            for (i=0;i<x.length;i++){
            x[i].style.textDecoration='underline'}}
          
            function Select1(a){
                var x=document.getElementById('paragraphe')
                x.style.fontSize=a.value
            }
    function fontfam(a){
var x=document.getElementById('paragraphe')
    x.style.fontFamily=a.value
}