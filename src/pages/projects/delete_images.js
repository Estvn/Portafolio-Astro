/*
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdxFile = path.join(__dirname, "./content/993_app_api_redis.mdx");

const imagesFolder = path.join(__dirname, "../../../public/assets/img/projects/api-redis");

const mdxContent = fs.readFileSync(mdxFile, "utf-8");

const regex = /\/assets\/img\/projects\/app-pokequeue\/([^\s)'"`]+)/g;
const referencedImages = new Set();
let match;
while ((match = regex.exec(mdxContent)) !== null) {
  referencedImages.add(match[1]);
}

console.log(`📄 Imágenes referenciadas (${referencedImages.size}):`, referencedImages);

const allImages = new Set(fs.readdirSync(imagesFolder));
console.log(`🗂 Imágenes en carpeta (${allImages.size}):`, allImages);

const unusedImages = [...allImages].filter(img => !referencedImages.has(img));

if (unusedImages.length === 0) {
  console.log("✅ No hay imágenes sin usar.");
} else {
  console.log(`⚠ Imágenes sin usar (${unusedImages.length}):`, unusedImages);
  unusedImages.forEach(img => {
    const imgPath = path.join(imagesFolder, img);
    fs.unlinkSync(imgPath);
    console.log(`🗑 Eliminada: ${imgPath}`);
  });
}
*/