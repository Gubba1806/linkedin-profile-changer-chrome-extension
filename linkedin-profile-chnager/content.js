const newProfilePicUrl = "https://wallpapers.com/images/hd/cool-neon-hoodie-profile-picture-vt4w54fxrvenydvu.jpg"; 

function replaceProfilePictures() {
  const profilePicSelectors = [
    ".ivm-view-attr__img--centered.EntityPhoto-circle-0.evi-image.lazy-image.ember-view" ,
    ".presence-entity__image.ivm-view-attr__img--centered.EntityPhoto-circle-6.evi-image.lazy-image.ember-view",
    ".zdOXkhCNitcIkvToOFZOVbsNqfPvXxeCOEs.pv-top-card-profile-picture__image--show.evi-image.ember-view" ,
    ".ivm-view-attr__img--centered.EntityPhoto-circle-3.update-components-actor__avatar-image.evi-image.lazy-image.ember-view",
    ".ivm-view-attr__img--centered.EntityPhoto-circle-2.update-components-actor__avatar-image.evi-image.lazy-image.ember-view",
    ".avatar.member.EntityPhoto-circle-2.evi-image.ember-view",
    ".ivm-view-attr__img--centered.ivm-image-view-model__circle-img.evi-image.lazy-image.ember-view", 
    ".ivm-view-attr__img--centered.ivm-image-view-model__square-img.evi-image.lazy-image.ember-view"
  ];

  profilePicSelectors.forEach(selector => {
    const profilePics = document.querySelectorAll(selector);
    profilePics.forEach(pic => {
      pic.src = newProfilePicUrl;
      pic.srcset = newProfilePicUrl;
    });
  });
}

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedReplaceProfilePictures = debounce(replaceProfilePictures, 300);

const observer = new MutationObserver((mutations) => {
  debouncedReplaceProfilePictures();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

replaceProfilePictures();