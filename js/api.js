fetch('https://cat-adrexo.fr/wp-json/wp/v2/posts?_embed').then(posts=> posts.json())
.then(posts =>{
    let post_header = ` 
                        <ol class="carousel-indicators">`
    posts.forEach(p => {
        if(posts.indexOf(p) == 0 ){
            post_header += `
            <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" area-current="true" aria-label="Slide 1" class="active"></li>`
        }
        else{   
            post_header += `
            <li data-mdb-target="#introCarousel" data-mdb-slide-to="${posts.indexOf(p)}" aria-label="Slide ${posts.indexOf(p) + 1 }"></li>
            `
        }
    });
     post_header += '</ol><div class="carousel-inner">'

    posts.forEach(p=>{
        if(posts.indexOf(p) == 0 ){
            post_header += ` <div class="carousel-item active" `
        }
        else{
            post_header += ` <div class="carousel-item" `

        }
        post_header += `
            style="background-image: url('${p.jetpack_featured_media_url}'); background-position: center; background-size: cover;">
            <div class="mask"  style="background-color: rgba(0, 0, 0, 0.6)">
                <div class="container px-4 h-100">
                    <div class="d-flex flex-column justify-content-center align-items-start h-100">
                    <div class="tag">${p._embedded['wp:term'][0][0]['slug']}</div>
                    <div class="mt-2">
                        <h1 class="shadow-5">${p.title.rendered}</h1>
                        <p>${p.excerpt.rendered}</p>
                        <a href="https://cat-adrexo.fr/${p.id}" class="btn btn-primary mt-3">Lire l'article <span class="fa fa-arrow-right"></span></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    post_header += "</div>"

    document.querySelector('.carousel').innerHTML = post_header
})

fetch('https://cat-adrexo.fr/wp-json/wp/v2/posts?_embed').then(data => data.json())
.then(dataJson => {
    let post = "<div class='news-carousel pt-5'>"
    dataJson.forEach(d => {
        post += `
            <article class="news shadow-5">
            <section class="news__content">
              <span class="categorie">${d._embedded['wp:term'][0][0]['slug']}</span>
              <div class="image">
                <img class="img-fluid w-100" src="${d.jetpack_featured_media_url}" alt="">
              </div>
              <main class="news-overlay">
                <h1>${d.title.rendered}</h1>
                <p>${d.excerpt.rendered}</p>
                <div class="metadata">
                  <span class="date">Le ${d.date}</span>
                  <span class="date">Par: CAT ADREXO</span>
                </div>
                <a href="https://cat-adrexo.fr/${d.id}" class="btn mt-3 btn-warning">Lire l'article</a>
              </main>
            </section>
          </article>`
       
    })
    post += "</div>"
    document.querySelector('.news-wrapper').innerHTML = post

    document.querySelector('.site').style.display = "block"
    document.querySelector('.loader').style.display = "none"
        $('.news-carousel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
        $('.mark_presence').slick({
            slidesToShow: 9,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 9,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    

})
