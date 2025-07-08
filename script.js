const name = prompt("Adınız nedir?");
const age = prompt("Yaşınız kaç?");
const job = prompt("Mesleğiniz nedir?");

const user = {
  name: name,
  age: Number(age),
  job: job
};


console.log("Kullanıcı Bilgileri:");
console.log("İsim:", user.name);
console.log("Yaş:", user.age);
console.log("Meslek:", user.job);


let cart = [];

while (true) {
  const productName = prompt("Sepete eklemek istediğiniz ürünü yazın (çıkmak için q):");
  if (!productName || productName.toLowerCase() === "q") break;

  const price = prompt(`${productName} ürününün fiyatı nedir?`);
  const priceNumber = Number(price);

  if (!isNaN(priceNumber)) {
    cart.push({ product: productName, price: priceNumber });
    console.log(`${productName} ürünü sepete eklendi. Fiyat: ${priceNumber} TL`);
  } else {
    console.log("Geçersiz fiyat girdiniz. Ürün eklenmedi.");
  }
}

console.log("\n--- Sepetiniz ---");
cart.forEach((item, index) => {
  console.log(`${index + 1}. Ürün: ${item.product} | Fiyat: ${item.price} TL`);
});


let totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log("Toplam Fiyat:", totalPrice, "TL");


const removeProduct = prompt("Sepetten çıkarmak istediğiniz ürün varsa adını yazın (yoksa q):");
if (removeProduct && removeProduct.toLowerCase() !== "q") {
  const initialLength = cart.length;
  cart = cart.filter(item => item.product.toLowerCase() !== removeProduct.toLowerCase());

  if (cart.length < initialLength) {
    console.log(`${removeProduct} ürünü sepetten çıkarıldı.`);
  } else {
    console.log(`${removeProduct} ürünü sepette bulunamadı.`);
  }


  console.log("\n--- Güncel Sepet ---");
  cart.forEach((item, index) => {
    console.log(`${index + 1}. Ürün: ${item.product} | Fiyat: ${item.price} TL`);
  });

  const newTotal = cart.reduce((total, item) => total + item.price, 0);
  console.log("Yeni Toplam Fiyat:", newTotal, "TL");
}
