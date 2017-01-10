var formattedName = HTMLheaderName.replace("%data%", 'Victor Matthews');

var formattedRole = HTMLheaderRole.replace("%data%", 'Software Engineer')

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
