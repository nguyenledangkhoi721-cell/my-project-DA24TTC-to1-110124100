const productList = [
    { id: "01", name: "xe", price: "24.500.000.000", image: "../assets/xe.jpg", productLink: "#" },
    { id: "02", name: "xe-mo-to", price: "150.000.000", image: "../assets/xe-mo-to.jpg", productLink: "https://hondaphucthanh.vn/san-pham/xe-honda-rebel-300/" },
    { id: "03", name: "Kawasaki Ninja 400", price: "170.000.000", image: "../assets/Kawasaki.jpg", productLink: "https://phuongnamgia.vn/kawasaki-ninja-400-abs-2022" },
    { id: "04", name: "Yamaha MT-03 ", price: "150.000.000", image: "../assets/Yamaha.webp", productLink: "https://yamaha-motor.com.vn/xe/mt-03-b5w7-b5wc/" },
    { id: "05", name: "Suzuki SV650", price: "180.000.000", image: "../assets/Suzuki.webp", productLink: "https://kienthuc.net.vn/suzuki-ra-mat-naked-bike-sv650-chot-gia-220-trieu-post343540.html" },
    { id: "06", name: "Harley-Davidson Street 500", price: "200.000.000", image: "../assets/Harley-Davidson.webp", productLink: "https://motoadventurer.com/2015/08/27/harley-davidson-street-500-first-impressions/" }
];
function addProduct(id,name,price,image,hyperLink)
{
            //tạo 1 thẻ div
        const newDiv = document.createElement("div");
        //Gắn thuộc tính vào newDiv
        newDiv.setAttribute("class","product-item");
        //tạo 1 thẻ div chứa ảnh
        const productImage = document.createElement("div");
        //Gắn thuộc tính cho thẻ div chứa ảnh
        productImage.setAttribute("class","product-image");
        //1.Tạo ảnh
        const productImageNode =document.createElement("img");
        productImageNode.setAttribute("src",image);
        productImageNode.setAttribute("alt",name);
        //Gắn hình vào trong thẻ div chứa ảnh
        productImage.appendChild(productImageNode);
        //Gắn thẻ div chứa ảnh vào newDiv
        newDiv.appendChild(productImage);
        //tạo thẻ div chứa thông tin hàng hóa
        const productInfo=document.createElement("div");
        //gắn thuộc tính cho thẻ div chứa thông tin hàng hóa
        productInfo.setAttribute("class","product-info");
        //tạo tên 
        const productInfoName=document.createElement("p");
        const productInfoNameTEXT=document.createTextNode(name);
        productInfoName.appendChild(productInfoNameTEXT);
        productInfo.appendChild(productInfoName);

        //tạo giá tiền
        const productInfoPrice=document.createElement("p");
        const productInfoPriceTEXT=document.createTextNode(price);
        productInfoPrice.appendChild(productInfoPriceTEXT);
        productInfo.appendChild(productInfoPrice);

        //tạo link
        const productInfoLink=document.createElement("a");
        const productInfoLinkTEXT=document.createTextNode("xem chi tiết");
        productInfoLink.appendChild(productInfoLinkTEXT);
        productInfoLink.setAttribute("href", hyperLink);
        productInfo.appendChild(productInfoLink);
        newDiv.appendChild(productInfo) 

        document.getElementById("product-list").appendChild(newDiv);
      
}