import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

async function readingHTML() {
    const path = resolve('./index.html');
    let file = await readFile(path);

    const data = {
        name : 'Cheemdu',
        Colg: 'UEM'
    }

    // console.log(file.toString());

    for(const [key, value] of Object.entries(data)) {
        file = file.toString().replace(`{{${key}}}`, value);
    }

    // console.log(file.toString());

    const newPath = resolve('./output.html');

    await writeFile(newPath, file);

}


readingHTML();