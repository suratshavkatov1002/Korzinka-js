window.addEventListener('DOMContentLoaded', function() {

    var products = document.querySelectorAll(".product");
    var buttons = document.querySelectorAll("button");
    var oppenBtn = document.querySelector(".open");


    function createcard() {

        var cart = document.createElement("div");
        var field = document.createElement("div");
        var heading = document.createElement("h2");
        var closeBtn = document.createElement("button");

        cart.classList.add("cart");
        field.classList.add("cart-field");
        closeBtn.classList.add("close");

        heading.textContent = "Olingan mahsulotlar";
        closeBtn.textContent = "Chiqish";

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);

        console.log(cart);
    }

    createcard()


    var cart = document.querySelector(".cart");
    var closeBtn = document.querySelector(".close");
    var field = document.querySelector(".cart-field");

    oppenBtn.addEventListener("click", function() {
        cart.style.display = "block";
    })

    closeBtn.addEventListener("click", function() {
        cart.style.display = "none";
    })


    buttons.forEach(function(item, i) {

        item.addEventListener("click", function() {
            var cloneItem = products[i].cloneNode(true);

            var btn = cloneItem.querySelector("button");

            btn.remove();

            field.appendChild(cloneItem);
            products[i].remove();
        })
    })

})