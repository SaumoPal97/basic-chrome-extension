document.body.style.backgroundColor = "#f4f4f4"; // Change background color
document.body.style.filter = "grayscale(50%)"; // Apply a grayscale effect

// Add a banner at the top
const banner = document.createElement("div");
banner.innerText = "Hello from Chrome Extension!";
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.left = "0";
banner.style.width = "100%";
banner.style.backgroundColor = "#008CBA";
banner.style.color = "white";
banner.style.padding = "10px";
banner.style.textAlign = "center";
banner.style.zIndex = "1000";
document.body.prepend(banner);
