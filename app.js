		"use strict";
(function(){

	var monObjet = {

		timer : null,
		defaultTimer : 20,
		intervalID : null,

		executer: function(){
			//var self;
			this.listeners();
			this.timer = this.defaultTimer;
		},

		countDown : function(){	
			this.timer --;
			this.afficherTime();		
			if(this.timer <= 0 ){
				clearInterval(this.intervalID);
			}	
		},

		afficherTime : function (){
			var minutes = parseInt(this.timer / 60, 10);
			var secondes = this.timer % 60;
			minutes = (minutes < 10 ? '0' : '') + minutes;
			secondes = (secondes < 10 ? '0' : '') + secondes;
			$("#minutes").text(minutes);
			$("#secondes").text(secondes);
		},

		listeners :function(){
			$(".start").on('click',this.start.bind(this));
			$(".stop").on('click',this.stop.bind(this));
			$(".reset").on('click',this.reset.bind(this));
		},

		stop:function(){
			this.intervalID = clearInterval(this.intervalID);
		},

		start:function(){
			//var self = this;
			//recreer le contexte avec le function countDown pour appliquer le this
			this.intervalID = setInterval(this.countDown.bind(this), 1000);
			if(this.timer == 0){
				this.timer = this.defaultTimer;
			}
		},

		reset :function(){
			this.timer = this.defaultTimer;
			this.intervalID = this.afficherTime();
		},

	};

//executer mon objet
monObjet.executer();

})();