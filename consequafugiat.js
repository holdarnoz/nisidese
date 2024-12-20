const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log(`Mutation detected: ${mutation.type}`);
  });
});

const target = document.getElementById('canvas');
observer.observe(target, {
  childList: true,
  subtree: true
});
