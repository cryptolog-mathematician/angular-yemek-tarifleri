import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Yemek } from '../shared/yemek';
import { Kategori } from '../shared/kategori';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {

      const anaYemekTarifleri = [
       {
         id:1, name:'Keşkek Tarifi',
         ingradients:['Buğday', 'Soğan', 'Kuzu Gerdan', 'Sivi Yag', 'Tuz', 'Karabiber'],
         measurements:['2 Su Bardagi', '2 Adet', '500 gr', 'Yarim Cay Bardagi', '50 gr', '100 gr'],
         image:'assets/images/keskek.jpg',
         preparation:"Buğdayı önceden haşlayın. Tencereye yemeklik kesilmiş soğanı alın ve kavurun. Üzerine haşlanmış olan buğdayı ekelyin. Yarım kg. kuzu etini haşlayın ve didikleyin. Kuzu etini tencereye ilave edin.Kaşık veya bir tahta kaşıkla devamlı dövün. iyice özleşmesi için. Üzerine kıvamı bağlamak için tencereye et suyunu ilave edin.  Devamlı özleşene kadar keşkeki pişirin."
       },

       {
         id:2, name:'Tas Kebabı Tarifi',
         ingradients:['Soğan', 'Tereyağı', 'Dana Kuşbaşı', 'Defne Yaprağı', 'Domates Salçası', 'Tane Karabiber', 'Un', 'Zeytinyağı', 'Tuz', 'Su'],
         measurements:['1 Adet', '1 Yemek Kaşığı', '1 Kilogram', '2 Adet', '2 Yemek Kaşığı', '1 Çay Kaşığı', '1 Tatlı Kaşığı', 'alabildigi kadar', 'istege bagli', 'alabildigi kadar'],
         image:'assets/images/taskeb.jpg',
         preparation:'Tas kebabı tarifimizin öncelikle etlerini hazırlıyoruz. Soğanı küp küp doğruyoruz. Geniş ve yayvan tenceremize biraz zeytinyağı döküyoruz. Etleri tencereye alıyoruz. Kavuruyoruz. Etler kavrulduktan sonra üzerine soğanı ilave ediyoruz. Tereyağını da tencereye alıyoruz. Kavuruyoruz. Soğanlar kavrulduktan sonra unu ekliyoruz. Kavuruyoruz. Ardından 2 yemek kaşığı domates salçasını ekliyoruz. Tane karabiberleri ve defne yaprağını da tencereye alıyoruz. Birkaç dakika kavurduktan sonra üzerine sıcak suyunu veriyoruz. Tencerenin kapağını kapatarak kısık ateşte pişmeye bırakıyoruz. Bu şekilde yaklaşık olarak 1,5 saat pişiriyoruz. Etlerin pişmesine yakın üzerine tuz serpiyoruz. Etlerin suyunu arada kontrol ediyoruz. Kıvamına göre sıcak suyunu veriyoruz. Istege bagli olarak uzeri icin patates, biber ve domates kizartilip eklenebilir.'
       }
     ];

     const aperatifYemekTarifleri = [
      {
        id:1, name:'Sebzeli Krep Tarifi',
        ingradients:['Yumurta', 'Süt', 'Un', 'Maydonoz', 'Dereotu', 'Krem Peynir', 'Sivi Yag', 'Tuz'],
        measurements:['1 Adet', '1.5  Su Bardagi', '1 Tutam', '1 Tutam', 'Istege gore', 'Istege gore', 'Istege gore'],
        image:'assets/images/skrep.jpg',
        preparation:"Sebzeli krep tarifimiz için, karıştırma kabına 1 adet yumurtayı kırıyoruz. Üzerine 1,5 su bardağı sütü boşaltıyoruz. Biraz da tuz serpiyoruz. Karıştırıyoruz. İnce kıyılmış dereotu ve maydanozu da karıştırma kabına alıyoruz."+
                    "\n" + "Üzerine 2 su bardağı unu ekliyoruz. Sebzeli krep harcımızın kıvamını ayarlıyoruz. Sebzeli krep harcımızı pişirmek için, teflon tavaya veya krep tavasına fırça ile az sıvıyağ sürüyoruz. Sonra da sebzeli krep harcımızdan 1 kepçe alarak tavamıza boşaltıyoruz."+
                    "\n" + "Tavamızı sağa sola çevirerek krep harcının yayılmasını sağlıyoruz. Sebzeli krepi alt üst çevirerek "
      },

      {
        id:2, name:'Sucuklu Patates Mücveri Tarifi',
        ingradients:['Patates', 'Yumurta', 'Sogan', 'Tuz', 'Karabiber', 'Rendelenmis Sucuk', 'Un'],
        measurements:['2 Adet', '2 adet', '1 Adet', 'Istege gore', 'istege gore', '1 Kase', '1 Yemek Kaşığı'],
        image:'assets/images/mucver.jpg',
        preparation:'Geniş bir kaseye soğanı rendeliyoruz. Patatesin kabuklarını soyup, kaseye rendeliyoruz. Sucuğu da rendeliyoruz. Tuz ve karabiber serpiyoruz. Unu ekliyoruz. Karıştırıyoruz. Yumurtaları da kırıyoruz. Hazırladığımız sucuklu patates mücver tarifimizi karıştırıyoruz. Geniş bir tavaya mücverleri kızartmak için, sıvıyağ dolduruyoruz. Yağ kızdıktan sonra sucuklu patates mücver harcından 1 yemek kaşığı alıp, kızgın yağa atıyoruz. Alt üst çevirerek kızartıyoruz. Kızarttığımız sucuklu patates mücverini servis tabağına alıyoruz. Yanında yoğurtla servise hazırlıyoruz.'
      }
    ];

     const kategoriler = [
       {id:1, name:'Ana Yemek Tarifleri'},
       {id:2, name:'Aperatif Yemek Tarifleri'},
       {id:3, name:'Borek Tarifleri'},
       {id:4, name:'Corba Tarifleri'},
       {id:5, name:'Salata Tarifleri'},
       {id:6, name:'Pasta Tarifleri'},
       {id:7, name:'Tatli Tarifleri'}
     ];

     return {anaYemekTarifleri, kategoriler, aperatifYemekTarifleri};
  }

  genId<T extends Yemek | Kategori>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }

/*
  genId(recipies: Recipe[]): number {
    return recipies.length > 0 ? Math.max(...recipies.map(recipe => recipe.id)) + 1 : 1;
  }
*/

}
