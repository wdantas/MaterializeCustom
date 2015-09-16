# MaterializeCustom
Customização do Framework MaterializeCSS

 - [Web Site: r2wsolucoes.com.br](http://r2wsolucoes.com.br)
 - [Repo: github.com/wdantas/MaterializeCustom](https://github.com/wdantas/MaterializeCustom)
 - [Linkeding: Wellington Dantas](https://br.linkedin.com/in/wndantas)

#Implementações
> Novas funções e como utilizar
> Todas as chamativas devem ser feitas dentro de $(document).ready(function(){})

```javascript
    $(document).ready(function(){
        //Seu código aqui
    });
```

## FULL HEIGHT - 100%
```javascript
    $('div').fullHeight()
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
- [nicescroll](https://github.com/inuyaksa/jquery.nicescroll)