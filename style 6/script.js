let names =new Array();
names[0]="javaji";
names[1]="sowjanya";
names[2]="Prasanth";
names[3]="kumar";
for(let i=0;i<names.length ;i++){
	if(names[i].charAt(0)=='j' || names[i].charAt(0)=="J"){
		console.log("Goodbye "+ names[i]);
	}
	else{
		console.log("Hello "+ names[i]);
	}
}