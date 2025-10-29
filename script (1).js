// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("active"));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"});
    navLinks.classList.remove("active");
  });
});

// Simple fade-in animation on scroll
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
});
document.querySelectorAll("section").forEach(sec=>obs.observe(sec));
