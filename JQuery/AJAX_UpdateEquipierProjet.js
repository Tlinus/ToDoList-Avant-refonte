function deleteEquipierProjet(idUser, fct, idProjet){

	alert(idUser);
	$.post(
		"Script_PHP/AJAX_deleteEquipierProjet.php",
		{
			idProjet:idProjet,
			idUser:idUser
		},
		function(data){
				
				location.reload();
		}
	);
		
};


$(document).ready(function(){
	$('#addUser').on("click", ".key img", function(){
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$(this).attr('src', './images/buttonunset.jpg')
		}
		else{
			$(this).addClass('selected');
			$(this).attr('src', './images/buttonvalid.jpg')
		}

	});

})

function addUsers(idProjet){

	var tab= new Array();
	$('.selected').each(function(index){
		var id = $('.selected').parent().attr('id');
		var fct = $('.selected').closest('tr').children().children('.fct').val();

		tab.push(new Array(id, fct));
	})
	var retour = JSON.stringify(tab);
	alert(retour);
	$.post(
		"Script_PHP/AJAX_addEquipierProjet.php",
		{
			idProjet:idProjet,
			retour:retour
		},
		function(data) {
			location.reload();
		}
	)

	Alert.ok('addUser')
}