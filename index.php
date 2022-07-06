<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>To do list </title>
        <link rel="stylesheet" href="style.css"/>
        <script src="monJS.js" ></script>
    </head>
    <body>
        <div id="conteneur">
            <form action="detruire.php" method="post">

                <input type="submit" name="session"  value="Fermer la session"/> <br>

                <label><b>Que devez vous faire ?</b></label><br>

                <input type="text" name="affaire" id="tache"  /><br>  
                
                <input type="button" onclick="addetolist()"  name="envoyer"  value="Envoyer"/>
            </form>

        </div>

        
    </body>
</html>