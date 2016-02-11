<?php

session_start();
/* Temporaire */
$idUtilisateur = $_SESSION['utilisateurId'];
// fin temporaire


require './Includes/includesKernel.php';
require './Includes/includesProjet.php';
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Mes projets</title>
		<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
		<link rel="stylesheet" href="<?php echo PATH_CSS ?>">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

	</head>
	<body id="mesProjets">
		<?php include_once('header.php'); ?>
	
	
			<?php // location: Script_PHP/fonctions.php
				afficheToutProjet($bdd, $idUtilisateur);
			?>
			
			<?php if($_SESSION['isAdmin'] == 1){ ?>
			<div id='creerUnProjet'>
				<form  method="post" action="creerUnNouveauProjet.php">
					<input type="hidden" value="Creer" name="action">
					<input type="submit" class="boutonValider" value="Creer un nouveau projet">
				</form>
			</div> 
			<?php } ?>
	</body>
</html>