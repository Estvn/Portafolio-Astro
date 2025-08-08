/*
import fs from 'fs/promises';  // Usamos fs.promises para async/await
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenemos la ruta del directorio actual (import.meta.url es necesario en ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración:
const folderPath = path.join(__dirname, './api-redis'); // Ruta relativa al script
const textToRemove = 'Pasted image ';

// Función asíncrona para renombrar archivos
async function renameFiles() {
  try {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      if (file.includes(textToRemove)) {
        const newName = file.replace(textToRemove, '');
        const oldPath = path.join(folderPath, file);
        const newPath = path.join(folderPath, newName);

        await fs.rename(oldPath, newPath);
        console.log(`✅ Renombrado: ${file} → ${newName}`);
      }
    }
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

// Ejecutar
renameFiles();
*/