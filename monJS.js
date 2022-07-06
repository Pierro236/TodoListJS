var maCle = 0; // j'initialise la clé à 0 pour plus tard :)


function addetolist() {

      
   var  monInput = document.getElementById("tache").value; // La tache saisie par l'utilisateur 


   if(monInput =="") { alert("Il faut saisir une tâche !"); }

   else{
      // on crée l'image check pour valider une tache

      var check = document.createElement('img');
      check.src="image/check.png";
      check.className="check";

      // on crée l'image close pour supprimer une tache 

      var close = document.createElement('img');
      close.setAttribute("src", "image/close.png");
      close.setAttribute("class", "close");

      // On récupère la div et on lui ajoute la nouvelle tache créer

      var mydiv = document.getElementById('conteneur');
      var maTache= document.createElement('li');
      maTache.style.paddingLeft = "10px";
      var maSaisie = document.createTextNode(monInput);
      maTache.appendChild(check);
      maTache.appendChild(maSaisie);
      maTache.appendChild(close);
      mydiv.appendChild(maTache);

      // Ici je définie des clés pour identifier les différentes taches et les sauvegarder en utilisant 
      // localStorage mais j'étudie encore comment faire .

      maCle = maCle + 1;
      console.log(maCle);
      localStorage.setItem(maCle,maTache);


   }

   // Interrupteur pour checker ou déchecker la tache 

   var  checked = false;
   maTache.addEventListener('click', function() {
      if(checked == false) {
         this.style.paddingLeft = "0px";
         check.style.display="block";
         this.style.textDecoration="line-through";
         checked = true;
      }
      else {
         this.style.paddingLeft = "10px";
         check.style.display="none";
         maTache.style.textDecoration="none";
         checked = false;
      }
   

  });

  // J'ajoute un listener à l'image close pour supprimer la tache

  close.addEventListener('click', function() {
   this.parentElement.style.display = "none";
  })


}












