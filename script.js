<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

$.getJSON('Data/20193.json',function(data){
console.log(data);
var output = '<ul>';  
$.each(data.Team, function(key,val){
  output += '<li>'+ val.Name + " " + val.Members[0]+ '</li>';
});
output += '</ul>';
$('#update').html(output);
});