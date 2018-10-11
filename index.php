<?php
  $json = file_get_contents('news.json');
  $json = json_decode($json);
  $list_post = $json;
  // echo $json->url; 
  
?>
<head>
  <?php include_once('src/components/head.php')?>
</head>
<body onload="readJson()">
  <?php include_once('src/components/search.php')?>
  <?php include_once('src/components/advanced_search.php')?>
  
  <div class="flex">
      <?php include_once('src/components/filter.php')?>
      <?php include_once('src/components/news_table.php')?>
  </div>
</body>