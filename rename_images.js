import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'public', 'assets', 'images', 'hero_images');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // Filter for png files and sort them
    const pngFiles = files.filter(file => file.endsWith('.png')).sort();

    console.log(`Found ${pngFiles.length} files to rename.`);

    pngFiles.forEach((file, index) => {
        const oldPath = path.join(directoryPath, file);
        // frame numbering starts at 1, pad with 3 zeros (e.g., 001)
        const newFilename = `frame_${(index + 1).toString().padStart(3, '0')}.png`;
        const newPath = path.join(directoryPath, newFilename);

        fs.rename(oldPath, newPath, (err) => {
            if (err) console.log('ERROR: ' + err);
        });
    });

    console.log('Renaming complete.');
});
