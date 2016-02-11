$(document).ready(function(){
	function showHide(idAClicker, classACacher){
		$(idAClicker).click(function(){
			if($(idAClicker).hasClass("hidden")) {
				$(classACacher).show();
				$(idAClicker).toggleClass("shown");
				$(idAClicker).removeClass("hidden");

			} 
			else{
				$(classACacher).hide();
				$(idAClicker).toggleClass("hidden");
				$(idAClicker).removeClass("shown");

			}
		});
	}
	showHide('#ProjetTacheBoxCRUD', '.CRUD' );
	showHide('.sousTacheDisplayer', '.sous_tache');
	//showHide('#ProjetSousTacheBoxCRUD', '.ProjetSousTacheBoxCRUD');

	function showHide2(idAClicker, classACacher, classACacher2, classACacher3){
		$(idAClicker).click(function(){
			if($(idAClicker).hasClass("hidden")) {
				$(classACacher).show();
				$(classACacher2).show();						
				$(idAClicker).toggleClass("shown");
				$(idAClicker).removeClass("hidden");

			} 
			else{
				$(classACacher).hide();
				$(classACacher2).hide();
				$(classACacher3).hide();
				$(idAClicker).toggleClass("hidden");
				$(idAClicker).removeClass("shown");
			}
		});
	}
	showHide2('#ProjetTacheBoxTitre', '.tache', '#ProjetTacheBoxCRUD', '.CRUD');

	/*function showHideEnfant(idAClicker, classEnfantACacher){
		$(idAClicker).click(function(){
			if($(idAClicker).hasClass("hidden")) {
				$(idAClicker).next(classEnfantACacher).show();
				$(idAClicker).toggleClass("shown");
				$(idAClicker).removeClass("hidden");

			} 
			else{
				$(idAClicker).next(classEnfantACacher).hide();
				$(idAClicker).toggleClass("hidden");
				$(idAClicker).removeClass("shown");

			}
		});
	}*/

	//showHideEnfant('#ProjetSousTacheBoxCRUD', '.sousTacheCRUD');
	
    $('.tache').on('click','.ProjetSousTacheBoxCRUD',function(){
        
        var children=$(this).parent().children('.sousTacheCRUD');
        $('.sousTacheCRUD').hide();
        if(children.hasClass('hidden')){
            
            children.removeClass('hidden');
            children.addClass('shown');
            children.show();
        }
        else{
            children.removeClass('shown');
            children.addClass('hidden');
            children.hide();
        }
    
    });
    
    $('.tache').on('click','.sousTacheDisplayer',function(){
        $('.sous_tache').hide();
        var sousTache=$(this).parent().children('.sous_tache');
        if(sousTache.hasClass('hidden')){
            sousTache.removeClass('hidden');
            sousTache.addClass('shown');
            sousTache.show();
        }
        else{
            sousTache.removeClass('shown');
            sousTache.addClass('hidden');  
            sousTache.hide();
        }
        
    })
	/*$('#ProjetTacheBoxContenu').on('click', '.ProjeftSousTacheBoxCRUD',  function(){
		if($('.ProjetSousTacheBoxCRUD').hasClass("hidden")) {
			$(this).find('.sousTacheCRUD').show();
			$('.ProjetSousTacheBoxCRUD').toggleClass("shown");
			$('.ProjetSousTacheBoxCRUD').removeClass("hidden");
		} 
		else{
			$(this).find('.sousTacheCRUD').hide();
			$('.ProjetSousTacheBoxCRUD').toggleClass("hidden");
			$('.ProjetSousTacheBoxCRUD').removeClass("shown");

		}

	});*/

	
	$('#ProjetEquipeBoxTitre').click(function(){
		if($('#ProjetEquipeBoxTitre').hasClass("hidden")) {
			$('.utilisateur_du_projet_box').show();
			$('#ProjetEquipeBoxTitre').toggleClass("shown");
			$('#ProjetEquipeBoxTitre').removeClass("hidden");
		}
		else{
			$('.utilisateur_du_projet_box').hide();
			$('#ProjetEquipeBoxTitre').toggleClass("hidden");
			$('#ProjetEquipeBoxTitre').removeClass("shown");
		}
	});


/*	$('.false').click(function(){
		$('.false').attr('src', './images/buttonvalid.jpg');
		$('.false').toggleClass("true");
		$('.true').removeClass("false");
	});

	$('.true').click(function(){
		$('.true').attr('src', './images/buttonunset.JPG');
		$('.true').toggleClass("false");
		$('.false').removeClass("true");
	}); */
});

function CustomAlert(){
	this.render = function( b){
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		var dialog = document.getElementById(b);


		dialog.style.left = (winW/2) - (600/2)+"px";
		dialog.style.top = "200px";
		dialog.style.display = "block";
	}
	this.ok =function(b){
		document.getElementById(b).style.display = "none";

	}
}
var Alert = new CustomAlert();