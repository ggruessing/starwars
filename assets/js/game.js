

var masterList = new Object();
var playerPicked = false

masterList["luke"] = {
	name: "Luke Skywalker" ,
	hp: 100 ,
	attk: 10,
	boost: 10,
	luck: 7,
	streak: 0,
	player: false,
	artA: "<pre>   ~~~~<br>  ~~o o<br>  _\\ -/_<br> / \\ /  \\<br>\\\\| |  |//<br> \\\\ |  //<br>  )===(I<br>  |_||_I<br>  (_)(_)<br>  |_||_|<br> /__][__\\<br></pre>",
	artB: "<pre>   ~~~~  +<br>  o o~~ //<br>  _\\-  //<br> / \\  //<br> \\__ //|<br>  --## |<br>  )===(|<br>  |_||_|<br>  (_)(_)<br>  |_||_|<br> /__][__\\<br></pre>",
	}
	masterList["darth"] = {
	name: "Darth Vader",
	hp: 200,
	attk: 50,
	boost: -10,
	luck: 4,
	streak: 0,
	player: false,
	artA: "<pre>    .-.<br>   |_:_|<br>  /(_Y_)\\<br> (_\\/M\\/_)<br>  /.'-'.\\<br> //|[_]| \\ <br> \\ |   |//<br>  #|===|\\#<br> / |\\ /I \\<br>/_ | | I _\\<br>   |_|_|<br></pre>",
	artB: "<pre>..  .-.  ..<br>|| |_:_| ||<br>||/(_Y_)\\||<br>||_\\/M\\/_||<br>|| .'-'. ||<br>||/|[_]|\\||<br>##/|   |\\##<br>## |===| ##<br> / |\\ /| \\<br>/_ | | | _\\<br>   |_|_|<br></pre>",
	}
	masterList["r2"] = {
	name: "R2-D2",
	hp: 80,
	attk: 50,
	boost: 0,
	luck: 10,
	streak: 0,
	player: false,
	artA: "<pre>           <br>           <br>    ___<br>   /() \\<br> _|_____|_<br>| | === | |<br>|_|  O  |_|<br> ||__O__||<br>|~ \\___/ ~|<br>/=\\ /=\\ /=\\<br>[_] [_] [_]<br></pre>",
	artB: "<pre>           <br>     |# - -<br>    _|_<br>   / ()\\ <br> _|_____|_<br>| | === | |<br>|_|  O  |_|<br> ||__O__||<br>|~ \\___/ ~|<br>/=\\ /=\\ /=\\<br>[_] [_] [_]<br></pre>",
	}
	masterList["c3"] = {
	name: "C3-PO",
	hp: 100,
	attk: 30,
	boost: 5,
	luck: 8,
	streak: 0,
	player: false,
	artA: "<pre>           <br>    /~\\<br>   ( oo|<br>  __\\=/__<br> //|/.\\|\\\\<br>|| |\\_/| ||<br>#  \\\\_//  #<br>   | | |<br>   |]|[|<br>   | | |<br>   /_][_\\<br></pre>",
    artB: "<pre>           <br>  # /~\\   #<br> ||( oo| //<br> ||_\\=/_//<br>  \\|/.\\|/<br>   |\\_/|<br>   \\\\_//<br>   | | |<br>   |]|[|<br>   | | |<br>   /_][_\\<br></pre>",
    }

var holder = {
	artA: "<pre>           <br>           <br>           <br>           <br>           <br>           <br>           <br>           <br>           <br>           <br>           <br></pre>"
}

var platform = {
	artA: "<pre> =========<br>[         ]<br>[         ]<br>[         ]<br>[         ]<br>[         ]<br>[         ]<br>[         ]<br>[         ]<br>[         ]<br>[_________]<br></pre>"
}
var winCount = 0
var chars = ["luke","darth","r2","c3"]
var eLoc = ["#e1","#e2","#e3",]
var eList = []
var playerSelect = []

$(document).ready(function() {
 
$(".b").html(holder.artA)
$(".oneone").html("Select your Character")
$("#luke").html(masterList.luke.artA)
$("#darth").html(masterList.darth.artA)
$("#r2").html(masterList.r2.artA)
$("#c3").html(masterList.c3.artA)

if (playerPicked===false){
$(document).on("click", ".pick" , function(){

	$(".b").html(holder.artA)



    var select = $(this).attr("id"); 
 

    // masterList[select]["player"] = true

    if ( playerPicked === false){
    	playerPicked = true

    	masterList[select].player = true
    	$("#player").html(masterList[select].artA)
    	playerSelect.push(select)

     	for (var i = 0; i < 4; i++) {

     		if (masterList[chars[i]]["player"]===false) {

     			eList.push(chars[i])
     		}
     			
     	}
     }

   for (var i = 0; i < 3; i++) {
     				
     	$(eLoc[i]).html(masterList[eList[i]]["artA"])
     }

    $(".platform").html(platform.artA)
    $(".oneone").html("Select an opponent to battle")
    $(".pick").removeClass("pick")
    $(".onethree").html("Win Count: " + winCount)



});}


$(document).on("click" , ".enemy" , function(){



	var select = '#' + $(this).attr("id") ; 

	$(".fightE").html(masterList[eList[eLoc.indexOf(select)]]["artA"])
	$(select).html(holder.artA)
	$(select).removeClass("enemy")
	$(".fightP").html(masterList[playerSelect]["artA"])
	$("#player").html(holder.artA)
	$(".oneone").html("Click Here to Attack!"+'<br>'+'Player Health: '+masterList[playerSelect]["hp"] + '<br>'+'Enemy Health: '+masterList[eList[eLoc.indexOf(select)]]["hp"])

	$(document).on("click" , ".oneone" , function(){

		if (winCount > 3){
			$(".oneone").html("CHAMPION OF THE WORLD")
			// return
		}
else{
		

		 strike = function(){
		 	masterList[eList[eLoc.indexOf(select)]]["hp"] = masterList[eList[eLoc.indexOf(select)]]["hp"] - masterList[playerSelect]["attk"]
		 	$(".fightE").html(masterList[eList[eLoc.indexOf(select)]]["artA"])
		 	$(".fightP").html(masterList[playerSelect]["artB"])
	     	$(".oneone").html('Opponent Attacking!'+'<br>'+'Player Health: '+masterList[playerSelect]["hp"] + '<br>'+'Enemy Health: '+masterList[eList[eLoc.indexOf(select)]]["hp"])
	     	setTimeout ('defend();', 2000);
	     }, 
	     
	     
	    defend = function(){
	    	if(masterList[eList[eLoc.indexOf(select)]]["hp"] > 1){
	     	masterList[playerSelect]["hp"] = masterList[playerSelect]["hp"] - masterList[eList[eLoc.indexOf(select)]]["attk"]
			$(".fightE").html(masterList[eList[eLoc.indexOf(select)]]["artB"])
			$(".fightP").html(masterList[playerSelect]["artA"])
	     	$(".oneone").html('Attack Again!'+'<br>'+'Player Health: '+masterList[playerSelect]["hp"] + '<br>'+'Enemy Health: '+masterList[eList[eLoc.indexOf(select)]]["hp"])
		}
				else if (masterList[eList[eLoc.indexOf(select)]]["hp"] < 1){
			console.log("theyded")
			$(".fightE").html(holder.artA)
			$(".oneone").html("Murder<br>Select your next opponent")
			winCount++
			$(".onethree").html("Win Count: " + winCount)


		}
			else if (winCount === 3){
			$(".oneone").html("CHAMPION OF THE WORLD")
		}
	}

		if (masterList[playerSelect]["hp"] > 1){
		 strike();
		}



		else if (masterList[playerSelect]["hp"] < 1 ) {
			console.log("ded")
			$(".fightP").html(holder.artA)
			$(".oneone").html("U died bro")
			// return

		 }


	}

}    )
});})










