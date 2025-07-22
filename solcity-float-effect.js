/**
 * solcity-float-effect.js
 * ---------------------------------------------
 * Smooth parallax-style floating effect based on mouse movement.
 *
 * Description:
 * This script animates elements with the class "float" based on 
 * mouse movement, creating a floating/hovering effect. Each element 
 * can define a custom --speed CSS variable to control its movement intensity.
 *
 */

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX
  mouseY = e.clientY
})

function animate () {
  currentX += (mouseX - currentX) * 0.5
  currentY += (mouseY - currentY) * 0.5

  const floats = document.querySelectorAll('.float')
  floats.forEach(el => {
    const speed = parseFloat(el.style.getPropertyValue('--speed')) || 1
    const x = ((currentX - window.innerWidth / 2) * speed) / 80
    const y = ((currentY - window.innerHeight / 2) * speed) / 80
    el.style.transform = `translate(${x}px, ${y}px)`
  })

  requestAnimationFrame(animate)
}

animate();