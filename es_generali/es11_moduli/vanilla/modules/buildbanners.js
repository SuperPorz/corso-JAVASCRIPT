const buildBanner = (data, bannersCounter) => {
  // Controlla che data sia un array valido
  if (!data || !Array.isArray(data) || data.length === 0) {
    console.error("Dati banner non validi:", data);
    return;
  }

  const bannerCompany = data[bannersCounter % data.length]; // Usa modulo per ciclare

  // Controlla che bannerCompany esista
  if (!bannerCompany) {
    console.error("Banner company non trovato");
    return;
  }

  const bannerSection = document.getElementById("bannerSection");
  
  // Pulisce la sezione prima di aggiungere nuovi banner
  bannerSection.innerHTML = "";
  
  const banner = document.createElement("section");
  banner.className = "rowSection aqua";

  // Usa DOMPurify correttamente per l'immagine
  const img = document.createElement("img");
  img.src = DOMPurify.sanitize(bannerCompany.imageSrc);
  img.alt = DOMPurify.sanitize(bannerCompany.imageAlt);
  img.width = 200;
  img.height = 200;

  const innerSection = document.createElement("section");
  innerSection.className = "columnSection pBlue";

  const h2 = document.createElement("h2");
  h2.textContent = DOMPurify.sanitize(bannerCompany.title);

  const p = document.createElement("p");
  p.textContent = DOMPurify.sanitize(bannerCompany.description);

  innerSection.appendChild(h2);
  innerSection.appendChild(p);
  banner.appendChild(img);
  banner.appendChild(innerSection);
  bannerSection.appendChild(banner);
}

export default buildBanner;