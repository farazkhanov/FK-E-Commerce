let cartCount = 0;

document.querySelectorAll(".addCartBtn").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;

    // Animation effect on cart button
    let cartBtn = document.getElementById("cartBtn");
    cartBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
      cartBtn.style.transform = "scale(1)";
    }, 200);
  });
});
