 
function myFunction() {  //üstte isim yazma kısmı açılır myName id'sine aktarılarak ekranda gözükmesi sağlanır.
    let text = prompt("Adınız nedir?");  //prompt ile ekrana Adınız nedir? yazan bir kutu çıkacak ve bu yazılan text değişkenine atanacak
    document.getElementById("myName").innerHTML = text;  //sonra HTML'de tanımladığımız myName id'sinin içerisine text değişkeni atanacak
  }
  window.onload=myFunction; //myFunction fonksiyonu ekran açıldığında direkt çalışacaktır
  setInterval(showTime,1000); //setInterval ile verilen süre 1 sn aralıklarla showTime fonksiyonunu çalıştıracaktır
  function showTime(){ //hem saati hem de günü göstermek için bir fonksiyon yazıyoruz
    let d = new Date();  //bir tane Date nesnesi oluşturduk
    document.getElementById("myClock").innerHTML= //sonra bu HTML'de tanımladığımız myClock id'sinin içerisine 
                                                  //saat:dakika:saniye gün olacak şekilde fonksiyonlarımızı yazdık
    getFullHours(d) + ":" +
    getFullMinutes(d) + ":" +
    getFullSeconds(d) + " " + getFullDays(d); 
  }
  //getFullHours, getFullMinutes, getFullSeconds fonksiyonları ile tek basamaklı sayılarda başa 0 gelmesi sağlandı.
  function getFullHours(d){  
    if(d.getHours() < 10){   //eğer saat tek basamaklı ise
      return '0' + d.getHours();  //başına 0 ekle
    }
    return d.getHours();
  }
  function getFullMinutes(d) {
    if (d.getMinutes() < 10) { 
        return '0' + d.getMinutes();
    }
    return d.getMinutes();
 };
  function getFullSeconds(d) {
    if (d.getSeconds() < 10) {
        return '0' + d.getSeconds();
    }
    return d.getSeconds();
 };
  function getFullDays(d){  

    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];  //önce günlerden oluşan bir array oluşturduk.
    var curWeekDay = days[d.getDay()];  //d.getDay bize günü sayı cinsinden veren bir fonksiyon, biz bu fonksiyonu array içerisine yazdık,
    return curWeekDay; // bunun array'de hangi güne karşılık geldiğini ekrana yazdırabildik

  } 



