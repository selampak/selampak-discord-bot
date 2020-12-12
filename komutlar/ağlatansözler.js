const Discord = require("discord.js"); 

exports.run = async (client, msg, args) => {
    let ağlatan=[
      "Ne olurdu zamanla geçecek değil de zamanla gelecek deselerdi…",
      "Dünyaları sığdırırdım yüreğime. Derdin bana bir zamanlar. Dünyaları sığdırırken yüreğine, beni sığdıramadın mı? ",
      "Boğazıma takıldı sevdan. Üç kere sırtıma vur helal de, alışık değilim harama ondan olacak herhalde.",
      "Alt yapısı olmayan bir şehir gibiyim… Ne zaman hüzünlensem gözlerimi su basıyor. Ve ne zaman seni düşünsem, kalbimin trafiği aksıyor. ",
      "Kalbime saray inşa etmeye çalışman çok güzel bir davranış. Ama keşke temeli atıp, derince kazdıktan sonra bırakıp gitmeseydin…",
      "Ne güzel demiş şair “Şimdi ben mutluluğa müebbet yesem, kesin yarın af çıkar.”",
      "Yağmur dökülüyor şehrime. Bardaktan boşalırcasına. Bu son diyorum bu son! Her defasında bitirdiğim yerden başlıyorum yine sana aşka.",
      "Ömrümün her gününde, asırlık elem saklı… Adın kalbime mühür artık, dilde yasaklı!.",
      "Yalnızlığımda çoğalıp, kalabalıkta eksiliyorum. Ve öylesine kalabalık ki yalnızlığım; ne yana dönsem sana çarpıyorum.",
      "Terk etmek kolaysa senin için, el sallamakta hiç zor olmaz benim için.",
      "Gelecekten de pek umutlu değilim artık. Adı gelecek olsa ne olur, seninle gelmedikten sonra.",
      "Eyvallah ne güzel bir sözdür. Bazen kabulleniş, bazen boş veriş, bazen yol veriş; ama sonunda hep bir rahata eriş. ",
      "Ne garip bir dünya bu. Aklımdasın diyen balıklar, ömrümsün diyen kelebekler gördüm.",
      "Her şeyin kıymetini bilirim ben. Bana ışığın kıymetini göstermen için dünyamı karartmana gerek yok.",
      "Keşke yanımda olsaydın demiyorum, biliyorum ki; isteseydin olurdun.",
      "Eğer bir insanı gerçekten unutmak istiyorsan onunla yaşadıklarını değil, onun sana yaşattıklarını hatırla.",
      "Kimine git dersin değerli olursun, kimini canından çok seversin gereksiz olursun.",
      "Pişman değilim! Sadece dön bak arkana; ne için, nelerden vazgeçtin? Neler dururken, sen neyi seçtin.",
      "Adın ki en güzel kelimedir dağarcığımda ne zaman ansam; kelimelerim kendini asar darağacında.",
      "Sen yine de bana, nasılsın? Diye sorma. İyiyim desem yalan olur; kötüyüm desem inancıma dokunur. En güzeli, şükre vurayım.",
     

     //Duygulandırıcı Sözler Şahsım Yani Benim Tarafımdan Yapıldı .. Paylaşmayınız Ve Çalmayınız /Owner Code Share ////
      
    ]
       let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Kime Duygulandırıcı Bir Söz Söğleyeceğim ? ')
  }});
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${ağlatan[Math.floor(Math.random() * 16)]}.`)
    }})
    }
    
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: true, // Tre = Açık False = Kapalı Değişebilir
    aliases: ["ağlatan-sözler","ağlatansözler","duygurandırıcı-sözler","duygulandırıcısözler"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'duygulandırıcı-sözler',
    description: 'Etiketlediğiniz Kişiye Duygulandırıcı Bir Söz Söyler',
    usage: 'duygulandırıcı-sözler'
   }