#POMACOLO - POor MAn's COnsole LOg

Put the script at the end of the body and it will put a poor man's console.log on the bottom of your screen,
showing the log entries for 5 seconds.

Usable as a dirty quick fix to show some logs on a mobile device

Currently does not support traversing objects or anything fancy, works best for simple text

##Example##

    <!DOCTYPE html>
    <html>
        <head>
            <title></title>
        </head>
        <body>
            <script type="text/javascript" src="pomacolo.js"></script>
            <script type="text/javascript">
                var bar = "asdf";
                console.log("Foo", bar);
                console.log(document);
            </script>
        </body>
    </html>
