var $ = function (id) 
{
    return document.getElementById(id);
}

 var calculate = function()
 {
    var stringFirstName, stringFavoriteAnimal, stringNewPassword;
    stringFirstName = ($("first_name").value);
    stringFavoriteAnimal = ($("favorite_animal").value);
    stringNewPassword = (stringFirstName + stringFavoriteAnimal + "123");
    $("new_password").value = stringNewPassword;
 }
 
 window.onload = function () 
{
    $("first_name").value = "";
    $("favorite_animal").value = "";
    $("calc").onclick = calculate;
    $("new_password").focus();
}