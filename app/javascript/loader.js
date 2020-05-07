var countDown;

countDown = setTimeout(showContent,2000);

function showContent(){
	$("#loader").fadeOut();
	$("#content").show("slow");
}