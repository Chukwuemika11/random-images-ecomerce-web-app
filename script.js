const images = ["https://tse1.mm.bing.net/th?id=OIP.2rtGEwDS_iUC9UKiiDsWGAHaE8&pid=Api&rs=1&c=1&qlt=95&w=158&h=105", "https://tse4.mm.bing.net/th?id=OIP.QLYEh-6Gy0n_1zMS-Y7gAAHaE7&pid=Api&P=0&h=220", "https://tse2.mm.bing.net/th?id=OIP.-UXXVeyrIX6lPL6_GFr4DwHaEK&pid=Api&P=0&h=220", "https://tse4.mm.bing.net/th?id=OIP.WZTeA-JIY5WlnzmseSyPKgHaE8&pid=Api&P=0&h=220", "https://tse2.mm.bing.net/th?id=OIP.gPw0B1YUhA0gVIlUtInYGwHaE8&pid=Api&P=0&h=220"];
const randomImage1 = document.getElementById("randomImage1");
const randomImage2 = document.getElementById("randomImage2");
const randomImage3 = document.getElementById("randomImage3");

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function updateRandomImages() {
  randomImage1.src = getRandomImage();
  randomImage2.src = getRandomImage();
  randomImage3.src = getRandomImage();
}

// Update images initially
updateRandomImages();

// Update images every 5 seconds (adjust as needed)
setInterval(updateRandomImages, 2000);
