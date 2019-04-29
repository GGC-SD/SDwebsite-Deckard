         $(document).ready(function() {
		
		
           $("option").click(function(){
			   if($(this).val() == '2019')
			   {
				   var txt = "";
            $.getJSON('data/20193.json',{},function(data) {
			console.log(data);
			$(data.team).each(function(key,val) {
			 
			txt += "<table border = '1' backgroundColor: 'white'>"
			txt += "<tr><td>" + "Team: " + val.name + "</td></tr>" + 
				"<tr><td>" + "Members: " + val.members[0] + ", " + val.members[1]
				+  ", " + val.members[2] + ", " + val.members[3] + "</td><tr>" +
				"<tr><td>" + "Project: " + val.project + "</td></tr>" + "<tr><td>" + "Link: " + val.link  + "</td></tr>" +
				"<tr><td>" + "Description: " + val.desc + "</td></tr>" + "<br>";
				txt += "</table>"
				document.getElementById("demo").innerHTML = txt;
			});
		})
			   }
			   else if($(this).val() == '2020')
			   {
				    var txt = "";
            $.getJSON('data/20203.json',{},function(data) {
			console.log(data);
			$(data.team).each(function(key,val) {
			 
			txt += "<table border = '1' backgroundColor: 'white'>"
			txt += "<tr><td>" + "Team: " + val.name + "</td></tr>" + 
				"<tr><td>" + "Members: " + val.members[0] + ", " + val.members[1]
				+  ", " + val.members[2] + ", " + val.members[3] + "</td><tr>" +
				"<tr><td>" + "Project: " + val.project + "</td></tr>" + "<tr><td>" + "Link: " + val.link  + "</td></tr>" +
				"<tr><td>" + "Description: " + val.desc + "</td></tr>" + "<br>";
				txt += "</table>"
				document.getElementById("demo").innerHTML = txt;
			});
		})
			   }
		   
		});
      });
     
