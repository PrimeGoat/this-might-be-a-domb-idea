const paragraph = document.getElementsByTagName("p")[0];
paragraph.style.color = "cyan";

const heading = document.getElementsByTagName("h1")[0];
heading.style.fontSize = "5em";

paragraph.innerText = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";

const item13 = document.getElementById("item-13");
item13.style.opacity = "50%";

const item3 = document.getElementById("item-3");
item3.innerText = "Hi!";

const image = document.getElementsByTagName("img")[0];
image.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg"
image.style.height = "300px";

const list = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = "Won't get fooled again.";
list.appendChild(newLi);
newLi.id = "item-16";
newLi.class = "item";
