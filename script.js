let mpesaPin = 3315; // Assuming these are global variables for demonstration
let mpesaBalance = 627;

function safaricomMpesa() {
    let menu = prompt(
        "1. Send Money\n2. Withdraw Cash\n3. Buy Airtime\n4. Loans and Savings\n5. Lipa na M-PESA\n6. My Account\n\nEnter your choice:"
    );

    // Convert menu to a number
    menu = parseInt(menu);

    if (isNaN(menu)) {
        alert("Invalid input. Please enter a number.");
        return; // Exit the function if input is not a number
    }

    switch (menu) {
        case 1:
            alert('Send Money');
            break;
        case 2:
            alert('Withdraw Cash');
            break;
        case 3:
            alert('Buy Airtime');
            break;
        case 4:
            alert('Loans and Savings');
            break;
        case 5:
            let lipaNaMpesa = prompt(
                "1. Pay Bill\n2. Buy Goods and Services\n3. Pochi La Biashara\n\nEnter your choice:"
            );
            // Convert lipaNaMpesa to a number
            lipaNaMpesa = parseInt(lipaNaMpesa);

            if (isNaN(lipaNaMpesa)) {
                alert("Invalid input. Please enter a number.");
                return; // Exit the function if input is not a number
            }

            switch (lipaNaMpesa) {
                case 1:
                    let payBill = prompt('Enter Business Number');
                    // Handle payBill logic here
                    break;
                case 2:
                    let buyGoodsandServices = prompt('Enter till no');
                    // Handle Buy Goods and Services logic here
                    break;
                case 3:
                    let pochiLaBiashara = prompt('Enter phone no');
                    // Handle Pochi La Biashara logic here
                    break;
                default:
                    alert("Invalid choice for Lipa na M-PESA.");
            }
            break;
        case 6:
            alert('My Account');
            break;
        default:
            alert('Sorry, your option is not available');
    }
}

// Call the function
safaricomMpesa();
