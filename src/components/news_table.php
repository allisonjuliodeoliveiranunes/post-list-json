<div class="block ml-2" id="news">  
    

<!-- Essa parte de baixo eu fiz em php, mas mudei para JS -->
<!-- <?php 
    foreach($list_post as $list_item):
        $url = $list_item->url.PHP_EOL;
        $titulo = $list_item->titulo.PHP_EOL;
        $descricao = $list_item->descricao.PHP_EOL;
        $imagem = $list_item->imagem.PHP_EOL;
        $data = $list_item->data.PHP_EOL;
        $hora = $list_item->hora.PHP_EOL;
      ?>
        <article class="card" id="post_data" data-custom-type="<?=$titulo?>">
           <div class="media">
                <figure class="mr-3">
                    <img class="mr-3" id="imagem" width="215" src="<?=$imagem?>" alt=""> 
                </figure>
              <div class="media-body">
                <h5 class="mt-0" id="titulo">
                    <a href="<?=$url?>" target="_blank"><?=$titulo?></a>
                </h5>
                <span id="descricao"><?=$descricao?></span>
                  <section class="infos">
                     <small><?=$data?> - <?=$hora?> - Compartilhe</small>
                     <a  href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                 </section>
                </div>
            </div>
        </article>
<?php endforeach; ?> -->


<!-- Nesse ID 'posts' é adicionado o template que está em main.js -->

<div id="posts">
</div>

<div class="show-posts">
    <a onclick="ShowMorePosts()" class="btn btn-light">Ver mais matérias</a>
</div>
