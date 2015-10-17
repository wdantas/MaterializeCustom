# MaterializeCustom
Customização do Framework MaterializeCSS

 - [Web Site: r2wsolucoes.com.br](http://r2wsolucoes.com.br)
 - [Repo: github.com/wdantas/MaterializeCustom](https://github.com/wdantas/MaterializeCustom)
 - [Linkeding: Wellington Dantas](https://br.linkedin.com/in/wndantas)
 - [Base: MaterializeCSS](http://materializecss.com/)
 - [Repo: MaterializeCSS](https://github.com/Dogfalo/materialize)

>ATENÇÃO! Não somos vinculados ao MaterializeCSS.com, apenas customizamos o framework disponibilizado, por que ele é sensacional!

#Implementações
> Novas funções e como utilizar
> Todas as chamativas devem ser feitas dentro de $(document).ready(function(){})

```javascript
    $(document).ready(function(){
        //Seu código aqui
    });
```

## Gallery Lightbox
>Permite exibir galerias no formato lightbox com ou sem grupos

```javascript
    //Imagem individual
    //<a href="ENDEREÇO_IMAGEM_LIGHTBOX.jpg" class="galeria"><img src="ENDEREÇO_THUMB.jpg"></a>

    //Grupo de imagens
    //<a href="ENDEREÇO_IMAGEM_LIGHTBOX1.jpg" class="galeria" data-group="NOME_GRUPO_EXIBIÇÃO"><img src="ENDEREÇO_THUMB1.jpg"></a>
    //<a href="ENDEREÇO_IMAGEM_LIGHTBOX2.jpg" class="galeria" data-group="NOME_GRUPO_EXIBIÇÃO"><img src="ENDEREÇO_THUMB2.jpg"></a>
    //<a href="ENDEREÇO_IMAGEM_LIGHTBOX3.jpg" class="galeria" data-group="NOME_GRUPO_EXIBIÇÃO"><img src="ENDEREÇO_THUMB3.jpg"></a>

    $('.galeria').gallery();

```

## AJAX SEND FORM
>Envia formulários com AJAX, sem necessidade de recarregar a página
>[Documentação AJAX](http://api.jquery.com/jquery.ajax/)

```javascript
    //<form name="example" action="send-form.php" method="post">
    //  <input name="nome" placeholder="nome"><br>
    //  <input name="email" placeholder="email"><br>
    //  <input name="telefone" placeholder="telefone"><br>
    //  <input type="submit" name="send" />
    //</form>

    $('form[name=example]').ajaxSendForm({
        notification: 'before',
        notificationAlignTxt :'center',
        notificarionMsgSuccess : 'Recebemos sua mensagem, em breve retornaremos!',
        notificarionMsgError : 'Desculpe, ocorrou um erro, tente novamente!'
    });

    //Default Setting
    //methodSend : 'POST',
    //notification : 'after', /*Ou 'before'*/
    //notificationClass : '', /*Adiciona classes customizadas*/
    //notificationAlignTxt : 'left', /*Define o alinhamento do texto 'left','center','right'*/
    //notificarionMsgSuccess : 'Mensagem enviada com sucesso!', /*Mensagem de Success*/
    //notificarionMsgLoading :'Enviando...Aguarde...', /*Mensagem Preloader*/
    //notificarionMsgError : 'Erro ao Enviar', /*Mensagem Error*/
    //preloadTime: 2000, /*Tempo de permanencia do preoader*/
    //alwayTime: 10000 /*Tempo para as notificações sumirem da tela*/
```



##VERTICAL ALIGN FROM Ie 9 && 10
>Corrigi o alinhamento vertical em alguns navegadores que não suportam o display flex
>É necessário a utilização do Modernizr

```javascript
    if (!Modernizr.flexbox){
        $('.valign-wrapper').verticalAlign();
    } 

    //get [Modernizr](https://modernizr.com/)
    //<html class="no-js">
```



## FULL HEIGHT - 100%
>Para a funcionalidade valign funcionar, a altura deve ser height e não min-height para os navegadores mais desatualizados.

```javascript
    $('div').fullHeight() /*retorna <div style="min-height: n px"></div>*/
    $('div').fullHeight({property : 'height'}) /*retorna <div style="height: n px"></div>*/

     //Default Setting
    //property : 'min-height'
```


## GOTO
>Evento de ScrollTop animado
>Easings disponíveis [Jquery Easing](https://jqueryui.com/easing/)

```javascript
    $('.example1').goTo()
    //<a href="#alvo">Link</a>

    $('.example2').goTo({
        attr : 'data-locate'
    })
    //<a class="example2" href="http://example.com" data-locate=".class-alvo">Link</a>
    //<a class="example2" href="http://example.com" data-locate="#id-alvo">Link</a>

    //Default Setting
    //attr : 'href',
    //easing :'easeOutQuart',
    //delay :800,
    //distanceTop : 0
```


#Plugins Adicionais
- [jquery](https://github.com/jquery/jquery)
- [Modernizr](https://modernizr.com/)
- [nicescroll](https://github.com/inuyaksa/jquery.nicescroll)