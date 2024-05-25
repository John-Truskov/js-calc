<h1 align="center">JS-Calc</h1>

## Описание

Простецкий калькулятор написанный на языке JavaScript. Работает в браузере.
Проверено в Google Chrome, Mozilla Firefox, Edge.
Запускать через файл index.html

## Возможные проблемы

Скорее всего первый раз будет запускать на локальном компьютере)))
Для первого запуска нужно в файле js/script.js закомментить вторую строку:
<p><code>//window.top.close();</code></p>
Так как браузер автоматически блокирует загрузку всплывающих окон,  то ему нужно разрешить загрузку всплывающих окон с этой станицы.
Потом обратно раскомментить эту стоку и снова запустить index.html<br>
И вуаля))) Радуемся и пользуемся)<br>
На реальном сервере калькулятор лучше запускать без файлов index.html и js/script.js через ссылку на станице (путь до calc.html прописать свой):<br>
<pre>&lt;a onclick="window.open('https://truskov.ru/calc/calc.html','Калькулятор','width=300,height=400,history=no,status=no,scrollbars=no,toolbar=no,location=no,menubar=no'); return false;" href="#" target="calc"&gt;Калькулятор&lt;/a&gt;</pre>

## Обратная связь

Если чо, какие вопросы есть, писать сюда:<br>
[truskov@bk.ru](mailto:truskov@bk.ru)