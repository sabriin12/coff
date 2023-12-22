function orderCoffee(choice) {
    var coffeeName = getCoffeeName(choice);
    alert("You've chosen " + coffeeName + ". Enjoy your coffee!");
}

function getCoffeeName(choice) {
    switch (choice) {
        case 1:
            return "Espresso";
        case 2:
            return "Latte";
        case 3:
            return "Cappuccino";
        default:
            return "Unknown Coffee";
    }
}
function orderSnack(choice) {
    var snackName = getSnackName(choice);
    alert("You've chosen " + snackName + ". Enjoy your snack!");
}

function getSnackName(choice) {
    switch (choice) {
        case 1:
            return "frech fries";
        case 2:
            return "Cookie";
        case 3:
            return "samosa";
        default:
            return "Unknown Snack";
    }
}