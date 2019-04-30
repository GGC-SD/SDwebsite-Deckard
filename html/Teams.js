$(document).ready(function() {

	$("option").click(function() {
		var selection = $(this).val();
	    if(selection == 'Nothing')
	    {
			var txt = "";
			txt += "<table border = '1' backgroundColor: 'white'>"
			txt += "</table>"
			document.getElementById("demo").innerHTML = txt;
	    }
		else
		{
			var txt = "";
			$.getJSON('data/teams.json',{
				semester: selection
			}, function(data) {
				$.each(data.team, function(i,item) {
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