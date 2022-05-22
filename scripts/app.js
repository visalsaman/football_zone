const search = () =>{
    const searchBox = document.getElementById("search-field").value.toUpperCase();
    const clubField = document.getElementById("card-field")
    const field = document.querySelectorAll(".card")
    const fieldName = clubField.getElementsByTagName("h5")

    for(let i = 0; i < fieldName.length; i++) {
        let match = field[i].getElementsByTagName("h5")[0];

        if (match){
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchBox) > -1){
                field[i].style.display = "";
            } else {
                field[i].style.display = "none";
            }
        }
    }
}