let main_body = document.querySelector('head + body');

// date google maps      
let src_map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.233399425778!2d-77.02475173531052!3d-12.096167894568415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86563d4c809%3A0xda5e38afd3134606!2sCalle%20German%20Schreiber%20Gulsmanco%20276%2C%20San%20Isidro%2015047!5e0!3m2!1ses!2spe!4v1593744852285!5m2!1ses!2spe";


let containerMapGoogle = document.querySelector('.fyn-add-maps');

let iframe_map = document.createElement('iframe');
iframe_map.src = src_map;
iframe_map.width = '100%';
iframe_map.height = 450;
iframe_map.style.border = "0";
iframe_map.style.display = "block";
iframe_map.frameBorder = 0;
iframe_map.allowFullscreen = true;



main_body.addEventListener('mouseover', function () {
	let mapGoogle = document.querySelector('iframe');
	if (mapGoogle) {
		// alert('hay un mapa')
	} else {
		containerMapGoogle.appendChild(iframe_map);
	}
});

main_body.addEventListener('touchstart', function () {
	let mapGoogle = document.querySelector('iframe');
	if (mapGoogle) {
		// alert('hay un mapa')
	} else {
		containerMapGoogle.appendChild(iframe_map);
	}
});