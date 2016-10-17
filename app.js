(function(){

	var monObjet = {

		timer : null,
		defaultTimer : 5,
		intervalID : null,

		executer: function(){
			monObjet.listeners();
			monObjet.timer = monObjet.defaultTimer;
		},

		countDown : function(){	
			monObjet.timer --;
			monObjet.afficherTime();		
			if(monObjet.timer <= 0 ){
				clearInterval(monObjet.intervalID);
			}	
		},

		afficherTime : function (){
			var minutes = parseInt(monObjet.timer / 60, 10);
			var secondes = monObjet.timer % 60;	
			$("#minutes").text(minutes);
			$("#secondes").text(secondes);
		},

		listeners :function(){
			$(".start").on('click',monObjet.start);
			$(".stop").on('click',monObjet.stop);
			$(".reset").on('click',monObjet.reset);
		},

		stop:function(){
			monObjet.intervalID = clearInterval(monObjet.intervalID);
		},

		start:function(){
			monObjet.intervalID = setInterval(monObjet.countDown, 1000);
		},

		reset :function(){
			monObjet.timer = monObjet.defaultTimer;
			monObjet.intervalID = monObjet.afficherTime();
		},

	};

//executer mon objet
monObjet.executer();

})();