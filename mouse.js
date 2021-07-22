var save=document.querySelectorAll("li");
for(i=0; i<save.length;i++){
	save[i].addEventListener("mouseover",function(){
		this.classList.add("select");
	});
	save[i].addEventListener("mouseout",function(){
		this.classList.remove("select");
	});
	save[i].addEventListener("click",function(){
		this.classList.toggle("done");
	});

}
