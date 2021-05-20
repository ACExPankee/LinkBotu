const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js')

client.on('ready', () => {
  client.user.setActivity(`+yardım`)
  console.log(`Linkçi online efendim!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.channel.send('AS! Naber');
  }
});

const yardim = new MessageEmbed()
.setTitle('Yardım Menüsü')
.setDescription('Bu mesajda bottan ders linki çekmek anlatılır')
.addField('Bot hakkında bilgilendirme', 'Bota girilen linkler ve değerler Taha tarafından el ile yazılmaktadır. Ondan dolayı en son atılan linkler her zaman doğru olmayabilir.')
.addField('Ders linki çekme', '+ders <ders adı> şeklinde yazmalısınız. Tamamen küçük harfler ile ve türkçe harfler kullanmadan.')
.addField('Örnek ders linki çekimi', '+ders matematik, +ders turkce')
.addField('Geliştirici için komut', '+sunucu => sunucu bilgilerini söyler')

client.on('message', msg => {
  if (msg.content === '+yardım') {
    msg.channel.send(yardim);
  }
});

const sunucu = new MessageEmbed()
.setTitle('Güncel sunucu')
.setDescription('128mb ram kullanıyoruz. Sponsor olun be :)')
.addField('RAM', '256mb toplam, 119mb kullanılan')
.addField('Ping Durumu', 'Bursa için maksimum 119ms, minimum 56ms')
.addField('Sunucu tipi', 'Sanal VDS sunucu. El ile açılmalı, 7/24 aktif değil')

client.on('message', msg => {
  if (msg.content === '+sunucu') {
    msg.channel.send(sunucu);
  }
});

const turkce = new MessageEmbed()
.setTitle('Türkçe Dersi')
.addField('Giriş Linki (Hasan Hoca)', '[Girmek için buraya basınız](https://us04web.zoom.us/j/6634586323?pwd=bU1ST0RDSXdPK2UwS2RwM3V5MUhaZz09)')
.addField('Manuel Giriş (Hasan Hoca)', 'ID: 663 458 6323, ŞİFRE: evdekal')
.addField('Giriş Linki (Zeynel Hoca)', '[Girmek için buraya basınız](https://us04web.zoom.us/j/9533575649?pwd=WW1nUm1uVDRwRTZRblFrNXh4bHdGdz09)')
.addField('Manuel Giriş (Zeynel Hoca)', 'ID: 953 357 5649, ŞİFRE: 12345')

client.on('message', msg => {
  if (msg.content === '+ders turkce') {
    msg.channel.send(turkce);
  }
});

const tektas = new MessageEmbed()
.setTitle('Teknoloji Tasarım Dersi')
.addField('Giriş Linki', '[Girmek için buraya basınız](https://us04web.zoom.us/j/76580287415?pwd=RWxZNGdGTG85ZHF1U3ZLNURQQlpTUT09)')
.addField('Manuel Giriş', 'ID: 765 8028 7415, ŞİFRE: ErcanPar')

client.on('message', msg => {
  if (msg.content === '+ders teknolojitasarim') {
    msg.channel.send(tektas);
  }
});

const din = new MessageEmbed()
.setTitle('Din Kültürü Dersi')
.addField('Giriş Linki', '[Girmek için buraya basınız](https://us04web.zoom.us/j/8581796941?pwd=Z0l2SThONjRsMVNvUHZCY21XcDUvZz09)')
.addField('Manuel Giriş', 'ID: 858 179 6941, ŞİFRE: oncenamaz')

client.on('message', msg => {
  if (msg.content === '+ders din') {
    msg.channel.send(din);
  }
});

const matematik = new MessageEmbed()
.setTitle('Matematik Dersi')
.addField('Giriş Linki', 'Giriş linki bulunamadı')
.addField('Manuel Giriş', 'ID: 380 126 3259, ŞİFRE: 12131415')

client.on('message', msg => {
  if (msg.content === '+ders matematik') {
    msg.channel.send(matematik);
  }
});

const fen = new MessageEmbed()
.setTitle('Fen Bilimleri Dersi')
.addField('Giriş Linki', '[Girmek için buraya basınız](https://us04web.zoom.us/j/3675715800?pwd=N0MxS1haeFBlU2l2aXFGdVVkZVBaZz09)')
.addField('Manuel Giriş', 'Bilgi bulunamadı')

client.on('message', msg => {
  if (msg.content === '+ders fen') {
    msg.channel.send(fen);
  }
});

const gorsel = new MessageEmbed()
.setTitle('Resim Dersi')
.addField('Giriş Linki', '[Girmek için buraya basınız](https://us04web.zoom.us/j/73555688802?pwd=RU11R01VM2VHMURZa2Jsdmg1c0cxUT09)')
.addField('Manuel Giriş', 'ID: 735 5568 8802, ŞİFRE: ErcanPar')

client.on('message', msg => {
  if (msg.content === '+ders resim') {
    msg.channel.send(gorsel);
  }
});

const kuran = new MessageEmbed()
.setTitle('Kuran Dersi')
.addField('Giriş Linki', '[Girmek için buraya basınız](https://us04web.zoom.us/j/6711023703?pwd=cXIvS1N2elRGcGU2VHBUSHlqZGplQT09)')
.addField('Manuel Giriş', 'Bilgi bulunamadı')

client.on('message', msg => {
  if (msg.content === '+ders kuran') {
    msg.channel.send(kuran);
  }
});

const kodlama = new MessageEmbed()
.setTitle('Kodlama Dersi')
.addField('Hata', 'Hoca hep farklı link ile açıyor')

client.on('message', msg => {
  if (msg.content === '+ders kodlama') {
    msg.channel.send(kodlama);
  }
});

const ingilizce = new MessageEmbed()
.setTitle('İngilizce Dersi')
.addField('Giriş Linki', 'Giriş linki bulunamadı')
.addField('Manuel Giriş', 'ID: 694 657 5994, ŞİFRE: 123456')

client.on('message', msg => {
  if (msg.content === '+ders ingilizce') {
    msg.channel.send(ingilizce);
  }
});

const beden = new MessageEmbed()
.setTitle('Beden Dersi')
.addField('Giriş Linki', '[Girmek için buraya basınız](https://us04web.zoom.us/j/3339002358?pwd=YWg2NlNSc2ZCMk5CK3ByOTNNU0hZdz09)')
.addField('Manuel Giriş', 'ID: 333 900 2358, ŞİFRE: 12345')

client.on('message', msg => {
  if (msg.content === '+ders beden') {
    msg.channel.send(beden);
  }
});

const arapca = new MessageEmbed()
.setTitle('Arapça Dersi')
.addField('Giriş Linki', '[Girmek için buraya basınız](https://us04web.zoom.us/j/9136408675?pwd=MURqK2NPdUZxM3pQQVBnR0ladWNudz09)')
.addField('Manuel Giriş', 'ID: 913 640 8675, ŞİFRE: 865537')

client.on('message', msg => {
  if (msg.content === '+ders beden') {
    msg.channel.send(beden);
  }
});

const muzik = new MessageEmbed()
.setTitle('Müzik Dersi')
.addField('Giriş Linki', '[Girmek için buraya basınız](https://us04web.zoom.us/j/6699402194?pwd=d21sU1Jrdi90ZXI2MkwxQ29kcXdvQT09)')
.addField('Manuel Giriş', 'ID: 669 940 2194, ŞİFRE: 1304')

client.on('message', msg => {
  if (msg.content === '+ders muzik') {
    msg.channel.send(muzik);
  }
});



client.login('ODQzNjkwMTk0ODk3MDc2MjM1.YKHhuQ.8fqxg4U17R-rAOBZFGedWdMit3s');