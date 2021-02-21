var inputte = document.getElementById("inputti");
inputte.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("buttoni").click();
  }
});//Katsoo onko enteriä painettu. Silloin kun enteriä 
	//on painettu sovellus painaa nappia, joka tekee tarkistus funktion.

function tarkistus(){//Viesti funktio
	var putput = document.getElementById("inputti").value;//Hakee inputin arvon.
	if(putput == null || putput == ""){
		eiole();//Katsoo onko inputin arvo tyhjä ja jos on tekee funktion eiole.
	}
	else if(isNaN(putput)){//Tarkistaa ettei inputissa numeroa.
   	if(putput == "listaa"){//Jos inputin arvo on lista
   		lista();			//appi tekee silloin lista funktion.
   	}
   	else if(putput == "google"){//Tarkistaa onko inputin arvo google,
   	google();					//jos on tekee google funktion.

   	}
   	else if(putput == "Elias"){// ↑
   		kuva();
   	}
   	else if(putput == "soita"){//↑
   		soita();
   	}
   	else if(putput == "tee popup"){//↑
   		popup();
   	}
   	else if(putput == "vihreä"){//↑
   		vihrea();
   	}
   	else if(putput == "onnitesti"){//↑
   		satu();
   	}
   	else if(putput =="nollaus"){//↑
   		nollaus();
   	}
   	else if( putput =="tuhoa"){//↑
   		tuhoa();
   	}
   }
   else{//Jos input on numero tekee funktio numero.
   	numero();
   }
}
function lista(){//Lista funktio
   	var divi = document.getElementById("yks");//Hakee vasemman kolumnin divin id:n.
	var lista = document.createElement("listaa");//Tekee lista elementin.
	lista.innerHTML = "listaa,<br> google, <br> Elias,<br> jokin luku,<br> soita,<br> tee popup,<br> onnitesti,<br> vihreä,<br> nollaus, <br> (tyhjä syöte)<br>";
	divi.appendChild(lista);//↑ Lista elementin sisältä.
   	}//Lisää lista elementti vasempaan diviin.
function google(){//Google funktio
	var divi = document.getElementById("kaks");//Hakee oikean puolisen kolumnin divin id:n.
	var linkki = document.getElementById("haku")//Hakee ankkurointi elementin.
	linkki.innerHTML = "Siirrytäänkö googleen?";//Lisää ankkurointi elementtiin tekstin.
	divi.appendChild(linkki);//Lisää linkki elementin diviin.
   	}
function ankkuri(){//Ankkurointi funktio
	window.open("https://www.google.com/"); //Avaa googlen uuteen ikkunaan.
}
function kuva(){//Kuva funktio
	var divi = document.getElementById("kaks");//Hakee oikean puolisen kolumnin divin id:n.
	var kuva = document.createElement("IMG");//Tekee kuva elementin.
	kuva.src = "jotakin.png";//Hakee kuvan elementtiin.
	divi.appendChild(kuva);//Lisää kuva elementin diviin.
}
function soita(){//Soita funktio
	var audio = new Audio('Kaboom.mp3');//Luo elementin ja etsii äänen.
	audio.play();//Soittaa äänen.
}
function popup(){//Popup funktio
	var divi = document.getElementById("kaks");//Hakee oikean puolisen kolumnin divin id:n.
	var juttu = document.createElement("div");//Luo divi elementin.
	juttu.classList.add("ilmestynyt")//Etsii tietyn id:n elementille.
	juttu.innerHTML = "Tässä <b>pyydetty</b> popup";//Divi elementin teksti <b> lihavoitsee tekstin.
	divi.appendChild(juttu);// Lisää divin oikean puoleiseen kolumniin.
}
function vihrea(){//Vihreä funktio
	document.getElementById("yks").style.background = "green";//Hakee vasemman kolumunin ja muuttaa sen vihreän väriseksi.
	document.getElementById("kaks").style.background = "green";//Hakee oikean kolumnin ja muuttaa sen vihreän väriseksi.
}
function eiole(){//Eiole funktio
	var divi = document.getElementById("kaks");//Hakee oikean kolumnin id:n.
	var eiole = document.createElement("ei");//Luo elementin eiole.
	eiole.innerHTML = "syöte ei tuo mitään <br>";//Elementin sisältö.
	divi.appendChild(eiole);//Lisää elementin oikeaan kolumniin.
}
function satu(){//Satu funktio
	var divi = document.getElementById("kaks");//Hakee oikean kolumnin id:n.
	var satu = document.createElement("numero");//Luo satu elementin.
	satu.innerHTML = "Voitat loton tänään: " + Math.floor(Math.random() * 100) + "% todennäköisyydellä <br>";
	divi.appendChild(satu);//Satu elementin teksti sisältö + satunnainen numero sadan sisältä.
}//Lisää satu elementti oikeaan kolumniin.

function numero(){//Numero funktio
	var divi = document.getElementById("kaks");//Hakee oikean kolumnin id:n.
    var kertaa = document.getElementById("inputti").value;//Hakee inputin arvon.
	var gene = ["generoitua tekstiä <br>"];//Generoi tekstiä.
	var teksti = "";//Tyhjä teksti elementti, johon tulee generoitu teksti.
	var a;//Elementti joka laskee for looppia.
	var i;//Elementti joka laskee for looppia.
	for(a = 0; a < kertaa; a++) {//For looppi.
		teksti += + a + 1 + ". "//For looppi looppaa myös järjestys numeroa, joten tiedetään mikä teksti on syntynyt tietyssä loopissa.
      for (i = 0; i < gene.length; i++) {//Toinen for looppi.
  		teksti += gene[i];//For looppi kiertää aina inputin arvon verran,
  			//joten jokainen looppi kierros tuottaa tekstiä.
  		}
  	}
  	divi.innerHTML = teksti; //Lisää oikeaan kolumniin generoidun tekstin.
}
function nollaus(){//Nollaus funktio
	window.location.reload(true);//Nollaa sivun päivittämällä sen.
}