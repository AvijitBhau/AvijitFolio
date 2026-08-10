window.PortfolioRenderer = (function () {
  'use strict';

  /* ── Inline SVG Icons ─────────────────────────────────────────────────── */
  var GH   = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'/></svg>";
  var EXT  = "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/><polyline points='15 3 21 3 21 9'/><line x1='10' y1='14' x2='21' y2='3'/></svg>";
  var CHK  = "<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>";
  var BOLT = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/></svg>";
  var CUP  = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='8 21 12 17 16 21'/><line x1='12' y1='17' x2='12' y2='13'/><path d='M7 4H4a2 2 0 0 0-2 2v2a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V6a2 2 0 0 0-2-2h-3'/><rect x='7' y='2' width='10' height='6' rx='1'/></svg>";
  var BOOK = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20'/><path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'/></svg>";
  var MIC  = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z'/><path d='M19 10v2a7 7 0 0 1-14 0v-2'/><line x1='12' y1='19' x2='12' y2='23'/><line x1='8' y1='23' x2='16' y2='23'/></svg>";
  var STAR = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/></svg>";
  var LI   = "<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'/><rect x='2' y='9' width='4' height='12'/><circle cx='4' cy='4' r='2'/></svg>";
  var TW   = "<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'/></svg>";
  var YT   = "<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z'/><polygon points='9.75 15.02 15.5 12 9.75 8.98 9.75 15.02'/></svg>";
  var IG   = "<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='2' width='20' height='20' rx='5' ry='5'/><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/><line x1='17.5' y1='6.5' x2='17.51' y2='6.5'/></svg>";
  var FB   = "<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/></svg>";
  var ORC  = "<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><line x1='12' y1='8' x2='12' y2='16'/><line x1='8' y1='12' x2='16' y2='12'/></svg>";

  var SOCIAL_ICONS = {
    linkedin: LI, github: GH, orcid: ORC,
    youtube: YT, twitter: TW, instagram: IG, facebook: FB
  };

  var ACH_ICONS  = { hackathon: BOLT, award: CUP, workshop: BOOK, seminar: MIC, participation: STAR };
  var ACH_COLORS = { hackathon: '#F59E0B', award: '#D97706', workshop: '#22C55E', seminar: '#A78BFA', participation: 'var(--text-3)' };

  /* ── Devicon helper ───────────────────────────────────────────────────── */
  var DEVICON_MAP = {
    html5: 'html5/html5-original', html: 'html5/html5-original',
    css3: 'css3/css3-original', css: 'css3/css3-original',
    javascript: 'javascript/javascript-original', js: 'javascript/javascript-original',
    java: 'java/java-original', python: 'python/python-original',
    c: 'c/c-original', mysql: 'mysql/mysql-original',
    git: 'git/git-original', github: 'github/github-original'
  };

  function deviconUrl(name) {
    var key = (name || '').toLowerCase();
    var path = DEVICON_MAP[key] || (key + '/' + key + '-original');
    return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/' + path + '.svg';
  }

  /* ── Skills ───────────────────────────────────────────────────────────── */
  function renderSkills(id) {
    var el = document.getElementById(id);
    var data = window.portfolioData;
    if (!el || !data || !data.skills) return;
    var html = '';
    data.skills.forEach(function (cat) {
      var chips = '';
      cat.items.forEach(function (skill) {
        var url = deviconUrl(skill.icon || skill.name);
        chips += '<div class="skill-chip">'
          + '<img src="' + url + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
          + '<span class="skill-chip-name">' + skill.name + '</span>'
          + '</div>';
      });
      html += '<div class="skill-row">'
        + '<div class="skill-row-label">' + cat.category + '</div>'
        + '<div class="skill-row-items">' + chips + '</div>'
        + '</div>';
    });
    el.innerHTML = html;
  }

  /* ── Featured Projects ────────────────────────────────────────────────── */
  function renderFeaturedProjects(id) {
    var el = document.getElementById(id);
    var data = window.portfolioData;
    if (!el || !data || !data.projects || !data.projects.featured) return;
    var html = '';
    data.projects.featured.forEach(function (proj, idx) {
      var flip = (idx % 2 !== 0) ? ' flip' : '';
      var stack = proj.stack.map(function (t) { return '<li class="tag">' + t + '</li>'; }).join('');
      var imgLinks = '';
      if (proj.github) imgLinks += '<a href="' + proj.github + '" class="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Code">' + GH + '</a>';
      if (proj.demo)   imgLinks += '<a href="' + proj.demo   + '" class="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Demo">' + EXT + '</a>';
      var btns = '';
      if (proj.github) btns += '<a href="' + proj.github + '" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">' + GH + ' Code</a>';
      if (proj.demo)   btns += '<a href="' + proj.demo   + '" class="btn btn-outline" target="_blank" rel="noopener noreferrer">' + EXT + ' Demo</a>';
      html += '<article class="feat-strip' + flip + '">'
        + '<div class="feat-image">'
          + '<img src="' + proj.image + '" alt="' + proj.title + '" loading="lazy">'
          + '<div class="feat-image-overlay"><div class="feat-image-links">' + imgLinks + '</div></div>'
        + '</div>'
        + '<div class="feat-content">'
          + '<span class="feat-num">0' + (idx + 1) + '</span>'
          + '<span class="feat-label">Featured Project</span>'
          + '<h3 class="feat-title">' + proj.title + '</h3>'
          + '<p class="feat-desc">' + proj.description + '</p>'
          + '<ul class="feat-stack">' + stack + '</ul>'
          + '<div class="feat-links">' + btns + '</div>'
        + '</div>'
        + '</article>';
    });
    el.innerHTML = html;
  }

  /* ── Other Projects ───────────────────────────────────────────────────── */
  function renderOtherProjects(id) {
    var el = document.getElementById(id);
    var data = window.portfolioData;
    if (!el || !data || !data.projects || !data.projects.other) return;
    var html = '';
    data.projects.other.forEach(function (proj) {
      var stack = proj.stack.map(function (t) { return '<li class="tag">' + t + '</li>'; }).join('');
      var links = '';
      if (proj.github) links += '<a href="' + proj.github + '" class="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Code">' + GH + '</a>';
      if (proj.demo)   links += '<a href="' + proj.demo   + '" class="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Demo">' + EXT + '</a>';
      html += '<div class="proj-row">'
        + '<div class="proj-row-left">'
          + '<p class="proj-title">' + proj.title + '</p>'
          + '<p class="proj-desc">' + proj.description + '</p>'
          + '<ul class="proj-stack">' + stack + '</ul>'
        + '</div>'
        + '<div class="proj-links">' + links + '</div>'
        + '</div>';
    });
    el.innerHTML = html;
  }

  /* ── Certifications ───────────────────────────────────────────────────── */
  function renderCertifications(id) {
    var el = document.getElementById(id);
    var data = window.portfolioData;
    if (!el || !data || !data.certifications) return;
    var html = '';
    data.certifications.forEach(function (cert) {
      var right = '';
      if (cert.verified) right += '<span class="verified-mark">' + CHK + ' Verified</span>';
      if (cert.verifyUrl) right += '<a href="' + cert.verifyUrl + '" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">View</a>';
      html += '<div class="cert-row" role="listitem">'
        + '<div class="cert-row-issuer">' + cert.issuer + '</div>'
        + '<div class="cert-row-center">'
          + '<p class="cert-row-name">' + cert.name + '</p>'
          + '<p class="cert-row-date">' + cert.date + '</p>'
        + '</div>'
        + '<div class="cert-row-right">' + right + '</div>'
        + '</div>';
    });
    el.innerHTML = html;
  }

  /* ── Achievements ─────────────────────────────────────────────────────── */
  function renderAchievements(id) {
    var el = document.getElementById(id);
    var data = window.portfolioData;
    if (!el || !data || !data.achievements) return;
    var html = '';
    data.achievements.forEach(function (ach) {
      var type   = ach.category || 'participation';
      var color  = ACH_COLORS[type] || ACH_COLORS.participation;
      var icon   = ACH_ICONS[type]  || STAR;
      var result = ach.result ? '<p class="ach-result">' + ach.result + '</p>' : '';
      var footer = '';
      if (ach.verified) footer += '<span class="verified-mark">' + CHK + ' Verified</span>';
      if (ach.verifyUrl) footer += '<a href="' + ach.verifyUrl + '" class="btn btn-ghost" style="font-size:0.72rem;padding:0.25rem 0.625rem" target="_blank" rel="noopener noreferrer">View</a>';
      html += '<article class="ach-card" data-category="' + type + '">'
        + '<div class="ach-card-top">'
          + '<div class="ach-icon" style="color:' + color + '">' + icon + '</div>'
          + '<span class="ach-cat">' + (ach.categoryLabel || type) + '</span>'
        + '</div>'
        + '<h3 class="ach-title">' + ach.title + '</h3>'
        + '<p class="ach-org">' + ach.organization + '</p>'
        + '<p class="ach-date mono dim">' + ach.date + '</p>'
        + '<p class="ach-desc">' + ach.description + '</p>'
        + result
        + (footer ? '<div class="ach-footer">' + footer + '</div>' : '')
        + '</article>';
    });
    el.innerHTML = html;
  }

  /* ── Testimonials ─────────────────────────────────────────────────────── */
  function renderTestimonials(id) {
    var el = document.getElementById(id);
    var data = window.portfolioData;
    if (!el || !data || !data.testimonials) return;
    var html = '';
    data.testimonials.forEach(function (t) {
      var initials = t.name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2);
      var source = (t.source === 'LinkedIn')
        ? '<p class="testi-source">' + LI + ' via LinkedIn</p>'
        : '';
      html += '<article class="testi-card">'
        + '<p class="testi-relation">' + t.relation + '</p>'
        + '<blockquote class="testi-quote">' + t.text + '</blockquote>'
        + '<div class="testi-author">'
          + '<div class="testi-avatar-wrap">'
            + '<img src="' + t.photo + '" class="testi-avatar" alt="' + t.name + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'
            + '<div class="testi-avatar-fallback">' + initials + '</div>'
          + '</div>'
          + '<div>'
            + '<p class="testi-name">' + t.name + '</p>'
            + '<p class="testi-role">' + t.role + ' &middot; ' + t.organization + '</p>'
            + source
          + '</div>'
        + '</div>'
        + '</article>';
    });
    el.innerHTML = html;
  }

  /* ── Gallery ──────────────────────────────────────────────────────────── */
  function renderGallery(id) {
    var el = document.getElementById(id);
    var data = window.portfolioData;
    if (!el || !data || !data.gallery) return;
    var html = '';
    data.gallery.forEach(function (item, i) {
      html += '<div class="gallery-item" role="listitem" tabindex="0"'
        + ' data-index="' + i + '" data-src="' + item.src + '" data-caption="' + item.caption + '">'
        + '<img src="' + item.src + '" alt="' + item.caption + '" loading="lazy">'
        + '<div class="gallery-item-overlay">'
          + '<span class="gallery-item-category">' + item.category + '</span>'
          + '<p class="gallery-item-caption">' + item.caption + '</p>'
        + '</div>'
        + '</div>';
    });
    el.innerHTML = html;
    if (window.refreshGalleryListeners) {
      window.refreshGalleryListeners();
    }
  }

  /* ── Social Links ─────────────────────────────────────────────────────── */
  function renderSocialLinks(id, showLabel) {
    var el = document.getElementById(id);
    var data = window.portfolioData;
    if (!el || !data || !data.social) return;
    var html = '';
    data.social.forEach(function (soc) {
      var key = (soc.icon || soc.name).toLowerCase().replace(/[^a-z]/g, '');
      if (key === 'xtwitter') key = 'twitter';
      var svg = SOCIAL_ICONS[key] || '';
      if (showLabel) {
        var cls = 'soc-link' + (soc.professional ? ' pro' : '');
        html += '<a href="' + soc.url + '" class="' + cls + '" target="_blank" rel="noopener noreferrer" aria-label="' + soc.name + '">'
          + svg + '<span>' + soc.name + '</span></a>';
      } else {
        html += '<a href="' + soc.url + '" class="footer-soc" target="_blank" rel="noopener noreferrer" aria-label="' + soc.name + '">'
          + svg + '</a>';
      }
    });
    el.innerHTML = html;
  }

  return {
    renderSkills: renderSkills,
    renderFeaturedProjects: renderFeaturedProjects,
    renderOtherProjects: renderOtherProjects,
    renderCertifications: renderCertifications,
    renderAchievements: renderAchievements,
    renderTestimonials: renderTestimonials,
    renderGallery: renderGallery,
    renderSocialLinks: renderSocialLinks
  };

})();
