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
         id: 1, name: 'Keşkek Tarifi',
         ingradients: ['Buğday', 'Soğan', 'Kuzu Gerdan', 'Sivi Yag', 'Tuz', 'Karabiber'],
         measurements: ['2 Su Bardagi', '2 Adet', '500 gr', 'Yarim Cay Bardagi', '50 gr', '100 gr'],
         image: 'assets/images/keskek.jpg',
         // tslint:disable-next-line:max-line-length
         preparation: 'Buğdayı önceden haşlayın. Tencereye yemeklik kesilmiş soğanı alın ve kavurun. Üzerine haşlanmış olan buğdayı ekelyin. Yarım kg. kuzu etini haşlayın ve didikleyin. Kuzu etini tencereye ilave edin.Kaşık veya bir tahta kaşıkla devamlı dövün. iyice özleşmesi için. Üzerine kıvamı bağlamak için tencereye et suyunu ilave edin.  Devamlı özleşene kadar keşkeki pişirin.'
       },

       {
         id: 2, name: 'Tas Kebabı Tarifi',
         // tslint:disable-next-line:max-line-length
         ingradients: ['Soğan', 'Tereyağı', 'Dana Kuşbaşı', 'Defne Yaprağı', 'Domates Salçası', 'Tane Karabiber', 'Un', 'Zeytinyağı', 'Tuz', 'Su'],
         // tslint:disable-next-line:max-line-length
         measurements: ['1 Adet', '1 Yemek Kaşığı', '1 Kilogram', '2 Adet', '2 Yemek Kaşığı', '1 Çay Kaşığı', '1 Tatlı Kaşığı', 'alabildigi kadar', 'istege bagli', 'alabildigi kadar'],
         image: 'assets/images/taskeb.jpg',
         // tslint:disable-next-line:max-line-length
         preparation: 'Tas kebabı tarifimizin öncelikle etlerini hazırlıyoruz. Soğanı küp küp doğruyoruz. Geniş ve yayvan tenceremize biraz zeytinyağı döküyoruz. Etleri tencereye alıyoruz. Kavuruyoruz. Etler kavrulduktan sonra üzerine soğanı ilave ediyoruz. Tereyağını da tencereye alıyoruz. Kavuruyoruz. Soğanlar kavrulduktan sonra unu ekliyoruz. Kavuruyoruz. Ardından 2 yemek kaşığı domates salçasını ekliyoruz. Tane karabiberleri ve defne yaprağını da tencereye alıyoruz. Birkaç dakika kavurduktan sonra üzerine sıcak suyunu veriyoruz. Tencerenin kapağını kapatarak kısık ateşte pişmeye bırakıyoruz. Bu şekilde yaklaşık olarak 1,5 saat pişiriyoruz. Etlerin pişmesine yakın üzerine tuz serpiyoruz. Etlerin suyunu arada kontrol ediyoruz. Kıvamına göre sıcak suyunu veriyoruz. Istege bagli olarak uzeri icin patates, biber ve domates kizartilip eklenebilir.'
       }
     ];

     const aperatifYemekTarifleri = [
      {
        id: 1, name: 'Sebzeli Krep Tarifi',
        ingradients: ['Yumurta', 'Süt', 'Un', 'Maydonoz', 'Dereotu', 'Krem Peynir', 'Sivi Yag', 'Tuz'],
        measurements: ['1 Adet', '1.5  Su Bardagi', '2  Su Bardagi', '1 Tutam', '1 Tutam', 'Istege gore', 'Istege gore', 'Istege gore'],
        image: 'assets/images/skrep.jpg',
        preparation: 'Sebzeli krep tarifimiz için, karıştırma kabına 1 adet yumurtayı kırıyoruz. Üzerine 1,5 su bardağı sütü boşaltıyoruz. Biraz da tuz serpiyoruz. Karıştırıyoruz. İnce kıyılmış dereotu ve maydanozu da karıştırma kabına alıyoruz.' +
                    '\n' + 'Üzerine 2 su bardağı unu ekliyoruz. Sebzeli krep harcımızın kıvamını ayarlıyoruz. Sebzeli krep harcımızı pişirmek için, teflon tavaya veya krep tavasına fırça ile az sıvıyağ sürüyoruz. Sonra da sebzeli krep harcımızdan 1 kepçe alarak tavamıza boşaltıyoruz.' +
                    '\n' + 'Tavamızı sağa sola çevirerek krep harcının yayılmasını sağlıyoruz. Sebzeli krepi alt üst çevirerek '
      },

      {
        id: 2, name: 'Sucuklu Patates Mücveri Tarifi',
        ingradients: ['Patates', 'Yumurta', 'Sogan', 'Tuz', 'Karabiber', 'Rendelenmis Sucuk', 'Un'],
        measurements: ['2 Adet', '2 adet', '1 Adet', 'Istege gore', 'istege gore', '1 Kase', '1 Yemek Kaşığı'],
        image: 'assets/images/mucver.jpg',
        // tslint:disable-next-line:max-line-length
        preparation: 'Geniş bir kaseye soğanı rendeliyoruz. Patatesin kabuklarını soyup, kaseye rendeliyoruz. Sucuğu da rendeliyoruz. Tuz ve karabiber serpiyoruz. Unu ekliyoruz. Karıştırıyoruz. Yumurtaları da kırıyoruz. Hazırladığımız sucuklu patates mücver tarifimizi karıştırıyoruz.' + 
        // tslint:disable-next-line:max-line-length
        'Geniş bir tavaya mücverleri kızartmak için, sıvıyağ dolduruyoruz. Yağ kızdıktan sonra sucuklu patates mücver harcından 1 yemek kaşığı alıp, kızgın yağa atıyoruz. Alt üst çevirerek kızartıyoruz. Kızarttığımız sucuklu patates mücverini servis tabağına alıyoruz. Yanında yoğurtla servise hazırlıyoruz.'
      }
    ];


    const borekTarifleri = [
      {
        id: 1, name: 'Kıymalı Çıtır Börek Tarifi',
        // tslint:disable-next-line:max-line-length
        ingradients: ['Yumurta Sarisi', 'Kiyma', 'Yufka', 'Kirmizi Biber', 'Maydonoz', 'Karabiber', 'Zeytin Yagi', 'Tuz', 'Yumurta', 'Corekotu', 'Susam'],
        // tslint:disable-next-line:max-line-length
        measurements: ['Ihtiyaca gore', '400 Gram', '4 Adet', '2 Adet', '1 Tutam', 'Istege gore', 'Istege gore', 'Istege gore', 'Istege gore', 'Istege gore', 'Istege gore'],
        image: 'assets/images/kiyCitBor.jpg',
        preparation: 'Kıymalı çıtır börek tarifimiz için, öncelikle iç harcını hazırlıyoruz. Soğanı küp küp doğruyoruz.' +
                    '\n' + 'Kırmızı biberlerin iç çekirdeklerini ayıklayıp, ince ince doğruyoruz. Tavaya biraz zeytinyağı döküyoruz. Doğradığımız soğanları tavaya alıyoruz. Kavuruyoruz.' +
                    '\n' + 'Soğanlar pembeleştikten sonra kıymayı tavaya alıyoruz. Kavuruyoruz. Kıymada kavrulduktan sonra kırmızı biberleri ilave ediyoruz. Tuz ve karabiber serpiyoruz. Kavurmaya devam ediyoruz. Böreğin iç harcı piştikten sonra tavayı ocaktan alıyoruz. Soğumaya bırakıyoruz.' +
                    '\n' + 'İç harcın ilk sıcaklığı çıktıktan sonra üzerine ince kıyılmış maydanoz serpiyoruz. Karıştırıyoruz. Ayrı bir tarafta tezgaha 4 adet yufkayı seriyoruz. Üçgen şeklinde 8’e kesiyoruz. Bu şekilde 32 tane üçgen yufka elde ediyoruz.' +
                    '\n' + 'Diğer taraftan küçük bir tavaya tereyağı koyup, eritiyoruz. Üçgen yufkaların üzerine erittiğimiz tereyağından fırça ile sürüyoruz. Yufkaların geniş kenarına hazırladığımız kıymalı harçtan yerleştiriyoruz.' +
                    '\n' + 'Yufkanın kenarların iç harcın üzerine kapatıyoruz. Sonra da rulo şeklinde börekleri sarıyoruz. Tüm üçgen yufkalar bitene kadar aynı şekilde devam ediyoruz. Hazır olan kıymalı börekleri yağlı kağıt serilmiş fırın tepsisine diziyoruz.' +
                    '\n' + 'Kıymalı böreklerin üzerine fırça ile yumurta sarısı sürüyoruz. Çörekotu ve susam serpiyoruz. Önceden ısıtılmış 180 derecelik fırında pişmeye bırakıyoruz.'
        },

      {
        id: 2, name: 'Tavuklu Talaş Böreği Tarifi',
        // tslint:disable-next-line:max-line-length
        ingradients: ['Yumurta Sarisi', 'Tavuk But', 'Milföy Hamuru', 'Sogan', 'Maydonoz', 'Karabiber', 'Zeytin Yagi', 'Tuz', 'Yumurta', 'Susam'],
        // tslint:disable-next-line:max-line-length
        measurements: ['Ihtiyaca gore', '3 Adet', '14 Adet', '2 Adet', '1 Tutam', 'Istege gore', 'Istege gore', 'Istege gore', 'Istege gore', 'Istege gore'],
        image: 'assets/images/tavTalBor.jpg',
        // tslint:disable-next-line:max-line-length
        preparation: 'Tavuklu talaş böreği tarifimiz için, öncelikle tavuk butlarını kemiklerinden ayırıp, küçük kuşbaşı şeklinde doğruyoruz.' +
                    '\n' + 'Tavamıza biraz zeytinyağı döküyoruz. Tavuk etlerini tavaya alıyoruz. Kavuruyoruz. Tavuk etlerini kavurduktan sonra yarım ay şeklinde doğradığımız soğanları tavaya alıyoruz.' +
                    '\n' + '1 çay bardağı bezelyeyi de tavaya ilave ediyoruz. Kavuruyoruz. Tuz ve karabiber serpiyoruz. İç harcımız piştikten sonra tavayı ocaktan alıyoruz. İlk sıcaklığı çıktıktan sonra üzerine ince kıyılmış maydanozu serpiyoruz.' +
                    '\n' + 'Karıştırıyoruz. Soğumaya bırakıyoruz. Diğer taraftan kare milföy hamurlarını tezgaha alıyoruz. Üzerlerine tavuklu iç harçtan paylaştırarak dolduruyoruz. Daha sonra karşılıklı olarak milföyleri iç harcın üzerine doğru kapatıyoruz.' +
                    '\n' + 'Tüm milföy hamurlarını aynı şekilde hazırlıyoruz. Yağlı kağıt serdiğimiz fırın tepsisine tavuklu talaş böreğini diziyoruz. Böreklerimizi kapattığımız yer alta gelecek şekilde diziyoruz. Üzerlerine yumurta sarisi suruyoruz. Susam serpiyoruz.' +
                    '\n' + 'Tavuklu talas boregini oda sicakliginda 20 dakika bekletiyoruz. Ardindan onceden isitilmes 180 derecelik firinda pisirmeye birakiyoruz.'
        }
    ];

     const kategoriler = [
       {id: 1, name: 'Ana Yemek Tarifleri'},
       {id: 2, name: 'Aperatif Yemek Tarifleri'},
       {id: 3, name: 'Borek Tarifleri'},
       {id: 4, name: 'Corba Tarifleri'},
       {id: 5, name: 'Salata Tarifleri'},
       {id: 6, name: 'Pasta Tarifleri'},
       {id: 7, name: 'Tatli Tarifleri'}
     ];

     return {kategoriler, anaYemekTarifleri, aperatifYemekTarifleri, borekTarifleri};
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
