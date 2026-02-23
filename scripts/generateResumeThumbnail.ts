import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// A small helper script that reads the first page of the PDF located in
// `static/Resume.pdf` and writes a JPEG thumbnail (the old
// `resume-page-1.jpg`) back into the `static` directory.  Running the
// script will overwrite whatever image exists in that location.
//
// This version is written in TypeScript; it can be executed directly with
// `npx ts-node` (see the `thumb` npm script added to package.json below)
// or compiled with `tsc` if you prefer.

async function generateThumbnail(): Promise<void> {
  const projectRoot = path.resolve(__dirname, '..');
  const inputPdf = path.join(projectRoot, 'static', 'Resume.pdf');
  const outputImg = path.join(projectRoot, 'static', 'resume-page-1.jpg');

  if (!fs.existsSync(inputPdf)) {
    console.error(`Cannot find PDF at ${inputPdf}`);
    process.exit(1);
  }

  try {
    console.log(`Generating thumbnail from ${inputPdf} to ${outputImg}`);
    await sharp(`${inputPdf}[0]`)
      .resize({ width: 800 })
      .jpeg({ quality: 80 })
      .toFile(outputImg);
    console.log('Thumbnail generation complete!');
  } catch (err) {
    console.error('Error creating thumbnail:', err);
    process.exit(1);
  }
}

// only execute when run directly (not when imported)
if (require.main === module) {
  generateThumbnail();
}
