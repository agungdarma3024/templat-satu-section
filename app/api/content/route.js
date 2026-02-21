import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  try {
    // 1. Tentukan lokasi folder tempat CMS menyimpan file
    const heroPath = path.join(process.cwd(), 'content', 'hero.md');
    const featuresPath = path.join(process.cwd(), 'content', 'features.md');

    // 2. Baca isi file tersebut jika ada
    const heroFile = fs.existsSync(heroPath) ? fs.readFileSync(heroPath, 'utf8') : '';
    const featuresFile = fs.existsSync(featuresPath) ? fs.readFileSync(featuresPath, 'utf8') : '';

    // 3. Ekstrak data (parse) menggunakan gray-matter
    const heroData = heroFile ? matter(heroFile).data : {};
    const featuresData = featuresFile ? matter(featuresFile).data : {};

    // 4. Kirim data yang aslinya berasal dari CMS ke frontend
    return Response.json({
      hero: heroData,
      features: featuresData
    });

  } catch (error) {
    console.error('Gagal membaca konten:', error);
    // Beri fallback (data cadangan) jika file belum terbuat atau error
    return Response.json({
      hero: { title: "Error Membaca CMS", subtitle: "Silakan periksa folder content" },
      features: { features: [] }
    });
  }
}