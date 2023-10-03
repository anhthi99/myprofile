/**
 * Author: noranekoo
 */
/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

const colors = ["#ff2aaa", "#fc3333", "#abc000", "#ccc000"];
const types = ["polygon", "circle",];

setup("polygon", "#cc5444", 50, 4);

setInterval(() => {
  let type_random = Math.floor(Math.random() * types.length);
  let color_random = Math.floor(Math.random() * colors.length);
  let numb = Math.floor(Math.random() * 100 + 1);
  let side_num = Math.floor(Math.random() * 4 + 4);
 setup(types[type_random], colors[color_random], numb, side_num);
},3000);


function setup(type, color, particles_num, polygon_side_num) {
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": particles_num,
          "density": {
            "enable": true,
            "value_area": 900
          }
        },
        "color": {
          "value": color
        },
        "shape": {
          "type": type,
          "stroke": {
            "width": 20,
            "color": "#000000",
          },
          "polygon": {
            "nb_sides": polygon_side_num,
          },
          "image": {
            "src": "img/github.svg",
            "width": 200,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 10,
            "opacity_min": 0.1,
            "sync": true
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 200,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 300
          },
          "push": {
            "particles_nb": 50
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  
  );
}
