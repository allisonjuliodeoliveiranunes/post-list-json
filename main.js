$(function () {

    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    //Filter Recruiters
$('select#mounth').change(function() {
	var filter = $(this).val();
	filterList(filter);
    console.log(filter)
});

// Recruiters filter function
function filterList(value) {
	var list = $("#posts #post_data");
	$(list).hide();
	if (value == "All") {
		$("#posts").find("article").each(function (i) {
			$(this).show();
		});
	} else {
		// *=" means that if a data-custom type contains multiple values, it will find them
		$("#posts").find("article[data-custom-type*=" + value + "]").each(function (i) {
			$(this).show();
		});
    }
    console.log(list)
}


});

function filterFunction() {
    var input, filter, div, tr, td, a;
    input = document.getElementById("filtro");
    filter = input.value.toUpperCase();
    div = document.getElementById("posts");
    div = div.getElementsByTagName("div");
    count = 0;
    for (i = 0; i < div.length; i++) {
        if (div[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
            count = count + 1
        } else {
            div[i].style.display = "none";
        }
    }
    
    document.getElementById('count').innerHTML = count;
    document.getElementById('search-filter').innerHTML = input.value;
    if(count < 1){
        document.querySelector('.results').addClass = 'void';
    }
    else{
        document.querySelector('.results').removeClass = 'void';
    }
}
function clear_search() {
    var input = document.getElementById('filtro')
    if (input.value === '') {
        document.getElementById('search-filter').innerHTML = '';
        filterFunction();
    }
}

visible = 0;
function ShowMorePosts() {
    readJson();
}
function readJson() {
    document.getElementById("posts").innerHTML = "";
    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    readTextFile("news.json", function (text) {
        visible = visible + 5
        // console.log(visible)
        var data = JSON.parse(text);
        var post = document.getElementById('posts');
        post.innerHTML += ''
        var noticias = 0;
        var fotos = 0;
        var videos = 0;
        var blogs = 0;

        for (i = 0; i < visible; i++) {
            post.innerHTML += '<article class="card" id="post_data" data-custom-type="'+data[i].categoria+'">' +
                '<div class="media"> ' +
                '<figure class="mr-3"> <img class="mr-3" id="imagem" width="215" src="' + data[i].imagem + '" alt=""> </figure>' +
                '<div class="media-body">' +
                '<h5 class="mt-0" id="titulo"><a href="' + data[i].url + '" target="_blank">' + data[i].titulo + '</a></h5>' +
                '<span id="descricao">' + data[i].descricao + '</span>' +
                '<section class="infos">' +
                '<small>' + data[i].data + ' - ' + data[i].hora + ' - Compartilhe</small>' +
                ' <a  href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a>' +
                '</section></div></div></article>';


        }
        for (j = 0; j < 50; j++) {
            if (data[j].categoria == 'Not�cia') {
                noticias = noticias + 1
            }
            else if (data[j].categoria == 'Vídeo') {
                videos = videos + 1
            }
            else if (data[j].categoria == 'Foto') {
                fotos = fotos + 1
            }
            else if (data[j].categoria == 'Blog') {
                blogs = blogs + 1
            }
        }
        document.querySelector('li[rel="Not�cia"]').innerHTML += ' ('+ noticias + ')';
        document.querySelector('li[rel="Vídeo"]').innerHTML += ' ('+ videos + ')';
        document.querySelector('li[rel="Foto"]').innerHTML += ' ('+ fotos + ')';
        document.querySelector('li[rel="Blog"]').innerHTML += ' ('+ blogs + ')';
        // window.scrollTo(120, document.body.scrollHeight);
    });
}