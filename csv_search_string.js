function compile_csv_search(text, search) {  
	var parse = text.split(/\n/),
		title = parse[0].split(','),
		title_id = title.indexOf(search);
		
	return function (q) {
		return parse.find(function (val, i) { 
			if (!i || !val) {return false}; 
			return val.split(',')[title_id] == q; 
		});
	}  
}

var csv_by_name = compile_csv_search(
    "ip,name,desc\n"+
    "10.49.1.4,server1,Main Server\n"+
    "10.52.5.1,server2,Backup Server",
    "name");

console.log(csv_by_name("server2"));
console.log(csv_by_name("server9"));

var csv_by_ip = compile_csv_search(
    "ip,name,desc\n"+
    "10.49.1.4,server1,Main Server\n"+
    "10.52.5.1,server2,Backup Server",
    "ip");

console.log(csv_by_ip("10.49.1.4"));
console.log(csv_by_ip("10.49.23.12"));
