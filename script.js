document.getElementById("orderBtn").addEventListener("click", function() {
    document.getElementById("orderPopup").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("orderPopup").style.display = "none";
});

document.getElementById("sendOrder").addEventListener("click", function() {
    const name = document.getElementById("customerName").value;
    const order = document.getElementById("orderDetails").value;
    if (name && order) {
        fetch("https://api.telegram.org/bot<TOKEN>/sendMessage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: "<CHAT_ID>",
                text: `Замовлення від ${name}: ${order}`
            })
        }).then(response => {
            alert("Замовлення надіслано!");
            document.getElementById("orderPopup").style.display = "none";
        });
    } else {
        alert("Будь ласка, введіть ваше ім'я та замовлення!");
    }
});
