function getSee(){ //déclare une fonction , une fonction c'est un bloc donc {}
var shoeSize=document.getElementById('shoeSize').value;
var yearOfBirth= document.getElementById('yearOfBirth').value;
// On vérifie que la saisie utilisateur sois bien des nombres
if(!isNaN(shoeSize) && !isNaN(yearOfBirth)){
  // on autorise les pointure entre 34 et 52 et l'année entre 1900 et 2019
  if((shoeSize >= 34 || shoeSize <= 52) && (yearOfBirth >= 1900 || yearOfBirth <= 2019)){
    var result = shoeSize * 2;
    result = result + 5; // ou result +=5
    result = result * 50;
    result = result - yearOfBirth;
    result = result + 1766;
    alert(result);
  }
  else{

    alert('La pointure et la date de naissance ne sont pas des pointures correcte');
  }
}
else{
    alert('Il faut saisir des chiffres')
  }
}
