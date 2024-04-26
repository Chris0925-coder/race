const gallery = document.querySelector('.gallery__insta');
const feed = document.querySelector('.gallery__container');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = 'IGQWRPS2FIYWx6MUtxdzk5RkpVNDctYUwzUEE2bjJwalNiaWFUcm5wUlFUNjEwbG43X3NoRWgwWHQ1aWM1R3REZAWpsZAk8yY25XTVd3VXczblJqMXhrcC10S1k1cFJ6RjlOQS1mTDhfODNNVllXUmhVNFhQLUhfWEUZD';
const url = `https://graph.instagram.com/me/media?fields=email,user_profile,media_url,caption,timestamp,permalink&limit=80&access_token=${token}`;

fetch(url)
.then(res => res.json())
.then(data => CrearHtml(data.data))
console.log(url);
function CrearHtml(data) {
    for (const img of data) {
        console.log(img);
        // let caption = img.caption;
        // let cap = caption;
        if (img.caption === undefined) {img.caption = ''}
        gallery.innerHTML += `
                            <div class="image overflow">
                                <img loading="lazy" src="${img.media_url}" alt="#">
                                <div class="opacity__hover">
                                    <a href="${img.permalink}" class="caption">
                                        <p>${img.caption}<br>${img.timestamp}</p>
                                    </a>
                                </div>
                            </div>`;
    }
};

next.addEventListener('click', moveGallery);

prev.addEventListener('click', moveGallery);

function moveGallery(e) {
    if(e.target.id === 'next' || e.target.parentElement.id === 'next') {
        feed.scrollLeft += feed.offsetWidth;
    } else {
        feed.scrollLeft -= feed.offsetWidth;
    }
};