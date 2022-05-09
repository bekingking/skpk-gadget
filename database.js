let gadget = [
    {
        kode: "BRG001",
        nama: "iPhone 13 Pro Max",
        stock: Number(10),
        harga: Number(22000000),
        foto: "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayosemarang/images/post/articles/2021/06/17/79268/hp-murah-spek-gahar.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG002",
        nama: "Samsung A7 Lite",
        stock: Number(20),
        harga: Number(50000000),
        foto: "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayosemarang/images/post/articles/2021/06/17/79268/hp-murah-spek-gahar.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG003",
        nama: "Oppo Reno 9",
        stock: Number(100),
        harga: Number(7000000),
        foto: "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayosemarang/images/post/articles/2021/06/17/79268/hp-murah-spek-gahar.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG004",
        nama: "Xiaomi Redmi Note 11",
        stock: Number(1000),
        harga: Number(5000000),
        foto: "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayosemarang/images/post/articles/2021/06/17/79268/hp-murah-spek-gahar.jpg",
        rating: "5.0"
    },
    {
        kode: "BRG005",
        nama: "Vivo",
        stock: Number(50),
        harga: Number(6000000),
        foto: "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ayosemarang/images/post/articles/2021/06/17/79268/hp-murah-spek-gahar.jpg",
        rating: "5.0"
    }
];

console.log(gadget);

function CariGadget(nama){
    for (index in gadget){
        if(gadget[index].nama==nama){
            return true;
        }
    }
}

if(CariGadget(prompt("Masukkan nama gadget"))){
    alert("Ketemu");
} else {
    alert("Tidak Ketemu");
}

