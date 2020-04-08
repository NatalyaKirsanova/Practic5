let fields = { 
   var1: "", 
   var2: "", 
   var3: "",
   var4: "",  
   var5: "", 
   var6: "", 
   speach: "" 
 };

function handleButton() {
	printSkazka(textSk);
	}

function printSkazka(data) {  
  	let textItog = "";
  	
  	for (key in fields) { 
     	fields[key] = $("input[name=" + key + "]")[0].value; 
   	} 
	
	data["text"].forEach(function(line, index) {
		for (key in fields) {
			line = line.replace("{" + key + "}", fields[key]);
		}
		textItog = textItog + line + "<br>";
	});

$(".result").html(textItog);
}



function init() {
	$(".start-btn").click(handleButton);
}


$(document).ready(init);

