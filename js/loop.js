//ÖDEV
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayıların toplamı  ?

//3.adım: kaç tane tek  sayı var ?
//4.adım: tek  sayılar toplamı ?
//5.adım: tek sayıları gösterelim ?

//6.adım: kaç tane çift  sayı var ?
//7.adım: çift  sayılar toplamı ?
//8.adım: çift sayıları gösterelim ?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmadan dursun

var num;
num = Number(prompt("Enter number"));
var sum = 0;
var countOfNumber = 0;

var evenOfCount = 0;
var evenOfSum = 0;

var oddOfCount = 0;
var oddOfSum = 0;

while (num < 1) {
  num = Number(prompt("1den büyük bir sayi giriniz"));
}

if (num == 44) {
  document.writeln("secret-key girildi program durdu" + "<br>");
} else {
  document.writeln("Verilen Sayı:" + num + "<br>");
  document.writeln("Kaç Tane Sayı:" + count(num) + "<br>");

  function count(num) {
    if (num >= 100) {
      return 99;
    } else {
      if (num >= 7) {
        countOfNumber = num - 1;
        return countOfNumber;
      } else {
        return num;
      }
    }
  }
  document.writeln("Toplamları:" + sumofNumbers(num) + "<br>");

  function sumofNumbers(num) {
    for (var i = 1; i <= num; i++) {
      if (i == 7 || i >= 100) {
        continue;
      } else {
        sum += i;
      }
    }
    return sum;
  }

  function evenNumber(num) {
    document.write("<br>" + "Çift Sayılar: 0");
    for (var i = 1; i <= num; i++) {
      if (i >= 100) {
        continue;
      }
      if (i % 2 == 0) {
        document.write( "-"+i);
        evenOfCount++;
        evenOfSum += i;
      }
    }
    document.write("<br>" + "Çift Sayı Adedi:" + evenOfCount);
    document.write("<br>" + "Çift Sayı Toplamı:" + evenOfSum + "<br>");
  }

  function oddNumber(num) {
    document.write("<br>" + "Tek Sayılar: 1");
    for (var i = 2; i <= num; i++) {
      if (i >= 100 || i == 7) {
        continue;
      }
      if (i % 2 == 1) {
        document.write("-"+i);
        oddOfCount++;
        oddOfSum += i;
      }
    }
    document.write("<br>" + "Tek Sayı Adedi:" + oddOfCount);
    document.write("<br>" + "Tek Sayı Toplamı:" + oddOfSum);
  }
  evenNumber(num);
  oddNumber(num);
}
