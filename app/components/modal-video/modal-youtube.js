export default function modalYoutube() {
  const youtubeModal = document.getElementById('modal-youtube');
  if (youtubeModal) {
    youtubeModal.addEventListener('show.bs.modal', (evt) => {
      const link = evt.relatedTarget;
      const youtubeSrc = link ? link.getAttribute('data-youtube-src') : '';
      const modal = evt.currentTarget;
      const frame = modal.querySelector('iframe');
      frame.setAttribute('src', youtubeSrc);
    });
    youtubeModal.addEventListener('hidden.bs.modal', (evt) => {
      const modal = evt.currentTarget;
      const frame = modal.querySelector('iframe');
      frame.setAttribute('src', '');
    });
  }
}
