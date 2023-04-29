//  FireWork.js (It is a javascript library)
// GitHub repository link
// https://github.com/crashmax-dev/fireworks-js
const container = document.querySelector('.fireworks')
const fireworks = new Fireworks.default(container, {
    opacity: 0.5,
    acceleration: 1.02,
    friction: 0.97,
    gravity: 1.5,
    particles: 60,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
        min: 0,
        max: 345
    },
    delay: {
        min: 30,
        max: 60
    },
    rocketsPoint: {
        min: 50,
        max: 50
    },
    lineWidth: {
        explosion: {
            min: 0.5,
            max: 2
        },
        trace: {
            min: 0.10,
            max: 1
        }
    },
    brightness: {
        min: 50,
        max: 80
    },
    decay: {
        min: 0.015,
        max: 0.03
    },
    mouse: {
        click: false,
        move: false,
        max: 1
    },
})

fireworks.start()