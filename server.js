document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    
    const res = await fetch("/api/initiate-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (data.redirectUrl) {
      window.location.href = data.redirectUrl; // redirect to eSewa/Khalti
    } else {
      alert("Payment initiation failed!");
    }
  });
});
