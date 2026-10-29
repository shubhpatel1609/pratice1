document.getElementById('year').textContent = new Date().getFullYear();

const fill = document.getElementById('pipelineFill');
const stages = document.querySelectorAll('.stage');
const sectionIds = ['checkout', 'skills', 'projects', 'contact'];
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

function updatePipeline() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
  fill.style.width = (progress * 100) + '%';

  let activeIndex = 0;
  sections.forEach((section, i) => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.5) {
      activeIndex = i;
    }
  });

  stages.forEach((stage, i) => {
    stage.classList.toggle('active', i <= activeIndex);
  });
}

window.addEventListener('scroll', updatePipeline, { passive: true });
window.addEventListener('resize', updatePipeline);
updatePipeline();
