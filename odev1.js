/**
 * Array için includesCi isimli yeni bir method(prototype) yazmanız isteniyor.
 * Method’a verilen parametrenin, array’in içerisindeki elemanların küçük/büyük
 * harf duyarlılığına bakmaksızın var olup olmadığının kontrolünü yapabilmesi gerekiyor.
 */

//İpucu 1: Array.prototype.includesCi =  dedikten sonra metodunuzu yazabilirsiniz
//İpucu 2: "HaKaN".toUppercase() size "HAKAN" sonucunu üretir

Array.prototype.includesCi = function(search) {
    if(this.find((val)=> val.toLowerCase()===search.toLowerCase())) 
      return true
    else 
      return false;
  
//Test :

const dizi = ["Patika","219","Akbank","React","Bootcamp"]

console.log(dizi.includesCi("patika")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(dizi.includesCi("kırmızı")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(dizi.includesCi("akbaNK")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
