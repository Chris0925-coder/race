const gallery = document.querySelector('.gallery');
const feed = document.querySelector('.gallery__container');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = 'IGQWRNbHlNOGF0UHdsQ21hYXZAkbFg0eng5NjNxVGkyMjUtWVNURHl5ZAmxLZAGItRGd0ZADV5b05mVENfWE1vRDJkN1YxSHE2QUtNQ0szWFVXdHlmUUpaS0pLQ1hLeV9kRk05X19ValFjQUgzMWpZAdHlOcm1GTVdpR3MZD';
const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=40&access_token=${token}`; 

fetch(url)
.then(res => res.json())
.then(data => CrearHtml(data.data))

function CrearHtml(data) {
    for (const img of data) {
        gallery.innerHTML += `<div class="image overflow">
                            <img loading="lazy" src="${img.media_url}" alt="#">
                            <div class="opacity__hover">
                                <a href="${img.permalink}" class="caption">
                                    <p>${img.caption.slice(0,100)}</p>
                                </a>
                            </div>
                        </div>`;
    }
};

next.addEventListener('click', moveGallery);

prev.addEventListener('click', moveGallery);

function moveGallery(e) {
    if(e.terget.id === 'next' || e.target.parentElement.id === 'next') {
        feed.scrollLeft += feed.offsetWidth;
    } else {
        feed.scrollLeft -= feed.offsetWidth;
    }
};