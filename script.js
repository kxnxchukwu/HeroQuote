var imagesArr = ["img/img1.jpg",
		         "img/img2.jpg",
		         "img/img3.jpg",
 		         "img/img4.jpg",
                 "img/img5.jpg",
                 "img/img6.jpg",
                 "img/img7.jpg",
                 "img/img8.jpg",
                 "img/img9.jpg",
                 "img/img10.jpg"
                ];
                

var quotesArr= ["My name is Tony Stark, I build neat stuff",
                "I am Batman, Gotham's Dark Knight",
                "I am Barry Allen, The Fastest Man Alive!",
                "Hi, This is your friendly neighbourhood Spiderman",
                "I am the mighty Thor, <span class = \"text-danger\">God of Thunder, son of Odin</span>",
                "I am T&#39;Challa, king of Wakanda!",
                "I am Groot!!!",
                "I fight for those who cannot fight for themselves",
                "Dormammu, I&#39;ve come to bargain!",
                "Hi I&#39;m Captain Marvel, the strongest Avenger"
               ];


function displayDetails()

{

var randomIndex = Math.floor(Math.random() * imagesArr.length - 0);

document.getElementById("background").src = imagesArr[randomIndex];

document.getElementById("quote").innerHTML = quotesArr[randomIndex];

}