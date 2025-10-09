
/* Basic interactivity: hamburger menu, year, contact form stub, and share button */
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('site-nav');
  if (hamburger && nav){
    hamburger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
  }
})();

function onSubmitContact(e){
  e.preventDefault();
  const status = document.getElementById('form-status');
  if(status){
    status.textContent = "Thanks! Your message has been sent (demo).";
  }
  // Here you could POST to a serverless endpoint or a service like Formspree
  return false;
}

function shareSite(){
  const url = window.location.href;
  const text = "Check out Maksim Ivanuta (DevOps Engineer & Web Developer)";
  if (navigator.share){
    navigator.share({ title: document.title, text, url });
  } else {
    // Fallback: open LinkedIn share
    const shareUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url);
    window.open(shareUrl, "_blank");
  }
}
