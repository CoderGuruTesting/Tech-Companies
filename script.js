var names = ["Apple", "Microsoft", "Alphabet"];

$(".listItems").html("");

$(".popup").hide()

for(i = 0; i < names.length; i++) {
    var listItem = document.createElement("div");
    listItem.classList.add("listItem");

    var listItemTitle = document.createElement("div");
    listItemTitle.classList.add("listItemTitle");
    listItemTitle.innerHTML = names[i];

    listItem.appendChild(listItemTitle);

    var listItemButton = document.createElement("button");
    listItemButton.classList.add("listItemBtn");
    listItemButton.id = i.toString();
    listItemButton.innerHTML = '<i class="fa-solid fa-info"></i>';
    listItemButton.addEventListener("click", function() {
        $(".popup").show();
        $(".popup").html(names[parseInt(this.id)]);
    });

    listItem.appendChild(listItemButton);

    document.querySelector(".listItems").appendChild(listItem);
}

window.onclick = function(event) {
    if(!event.target.classList.includes("listItemBtn") && !event.target.classList.includes("popup")) {
        $(".popup").hide()
    }
}