var listaMusicas = [
  "https://upload.wikimedia.org/wikipedia/pt/c/c6/O%21RUL8%2C2.jpg",
  "https://upload.wikimedia.org/wikipedia/en/e/ea/BTS_Skool_Luv_Affair.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/a/a9/BTS_-_Dark_%26_Wild.jpg",
  "https://direct.rhapsody.com/imageserver/images/alb.275545717/500x500.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/3/32/Wings-BTS.jpg",
  "https://ibighit.com/bts/images/bts/discography/you_never_walk_alone/album-cover.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/6/65/Love_Yourself_-_Her.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/a/ae/BTS_-_Love_Yourself_Tear.jpeg",
  "https://ibighit.com/bts/images/bts/discography/love_yourself-answer/album-cover.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51wUYZ1HYmL._AC_SL1200_.jpg",
  "http://d3ugyf2ht6aenh.cloudfront.net/stores/987/955/products/eq59mu0vaaaq_hn-cfb74fe78160887bd215819522086715-640-0.jpg",
  "https://m.extra.globo.com/incoming/24756100-a72-481/w480h720-PROP/tracklist-be.jpg",
];

var listaLinks = [
  '<iframe src="https://open.spotify.com/embed/album/7xp8NlqiWjtSJ8oFvyShB2" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/5DIb84mvBHZnYFpIsdt2tL" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/7FxxU3EP37uMsZf8FilkDR" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/7qvA0kf1dkmR1As2gOnBPn" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/17FnTn4P3Bkyf6mbNQDhhy" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/7LF4N7lvyDhrPBuCJ1rplJ" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/2FTS6a6DLXMNp8flyA0HGO" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/2jJfnAZE6IG3oYnUv2eCj4" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/2lATw9ZAVp7ILQcOKPCPqp" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/1AvXa8xFEXtR3hb4bgihIK" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/6mJZTV8lCqnwftYZa94bXS" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
  '<iframe src="https://open.spotify.com/embed/album/2qehskW9lYGWfYb0xPZkrS" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
];

var albums = [];

for (var i = 0; i < listaMusicas.length; i++) {
  albums.push({
    imagem: listaMusicas[i],
    musica: listaLinks[i],
  });

  var botoesPlayer = document.getElementById("botoes-player");

  botoesPlayer.insertAdjacentHTML(
    "beforebegin",
    "<button type='button' class='botao-player' id=" +
      i +
      " class='botao-player' onclick='tocarAlbum(" +
      i +
      ")' ><img src=" +
      listaMusicas[i] +
      "></button>"
  );
}

function tocarAlbum(indexMusica) {
  var player = document.getElementById("player-de-video");

  player.innerHTML = albums[indexMusica]["musica"];
}
