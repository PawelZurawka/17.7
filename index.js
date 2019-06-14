const fs = require('fs');
const colors = require('colors');

fs.readdir('../17.7/', 'utf-8', function(err, files) {
    if (err) throw err;
    console.log('Pobrano strukturę głównego katalogu projektu!'.blue);
    console.log(files);
    fs.writeFile('./struktura.txt', 'Tak wygląda struktura katalogu: ' + files, function(err){
        if(err) throw err;
        console.log('Struktura została zapisana w pliku "struktura.txt"'.green);
    });
});