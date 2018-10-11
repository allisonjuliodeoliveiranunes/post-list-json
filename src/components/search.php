<div class="input-group mt-3 search">
  <div class="input-group-prepend">
    <span class="fa fa-search"></span>
  </div>
    <form action="" class="form-group flex">
    <!-- " -->
        <input type="text" class="form-control" aria-label="Pesquisar" id="filtro" onkeyup="clear_search()"> 
        <select id="mounth">
          <option value="hide">em todo o site</option>
          <option value="site">em todo o site</option>
          <option value="Not�cia">Notícias <span class="noticia"></span></option>
          <option value="Vídeo">Vídeos</option>
          <option value="Foto">Fotos</option>
          <option value="Blog">Blogs</option>
      </select> 
        <input type="submit" class="form-control btn btn-primary" value="Pesquisar" aria-label="Pesquisar" onclick="filterFunction()">
    </form>
</div>