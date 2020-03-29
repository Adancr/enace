let main_body = document.querySelector('head + body');

// date google maps      
let src_map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.471035408652!2d-77.0380496851871!3d-12.079872091445253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f37c1442d7%3A0xff8daf54e3edecda!2sJir%C3%B3n%20Manuel%20Segura%20142%2C%20Cercado%20de%20Lima%2015046!5e0!3m2!1ses!2spe!4v1585434420986!5m2!1ses!2spe";
let containerMapGoogle = document.querySelector('.fyn-add-maps');

let iframe_map = document.createElement('iframe');
iframe_map.src = src_map;
iframe_map.width = '100%';
iframe_map.height = 450;
iframe_map.style.border = "0";
iframe_map.style.display = "block";
iframe_map.frameBorder = 0;
iframe_map.allowFullscreen = true;



main_body.addEventListener('mouseover', function(){
    let mapGoogle = document.querySelector('iframe');
	if (mapGoogle) {
		// alert('hay un mapa')
	} else {
		containerMapGoogle.appendChild(iframe_map);
	}
});

main_body.addEventListener('touchstart', function(){
	let mapGoogle = document.querySelector('iframe');
	if (mapGoogle) {
		// alert('hay un mapa')
	} else {
		containerMapGoogle.appendChild(iframe_map);
	}
});