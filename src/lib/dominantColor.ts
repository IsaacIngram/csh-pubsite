import sharp from "sharp";

interface LogoAsset {
  bg: string;
  src: string;
}

const cache = new Map<string, LogoAsset>();

export async function getLogoAsset(url: string): Promise<LogoAsset> {
  const cached = cache.get(url);
  if (cached) return cached;

  try {
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());

    const { width = 1, height = 1 } = await sharp(buf).metadata();
    const size = Math.max(1, Math.round(Math.min(width, height) * 0.08));
    const corners = [
      { left: 0, top: 0 },
      { left: width - size, top: 0 },
      { left: 0, top: height - size },
      { left: width - size, top: height - size },
    ];

    let r = 0;
    let g = 0;
    let b = 0;
    for (const corner of corners) {
      const { data } = await sharp(buf)
        .flatten({ background: "#ffffff" })
        .extract({ ...corner, width: size, height: size })
        .resize(1, 1)
        .raw()
        .toBuffer({ resolveWithObject: true });
      r += data[0];
      g += data[1];
      b += data[2];
    }
    const bg = `rgb(${Math.round(r / 4)}, ${Math.round(g / 4)}, ${Math.round(b / 4)})`;

    const trimmed = await sharp(buf).trim({ threshold: 10 }).png().toBuffer();
    const src = `data:image/png;base64,${trimmed.toString("base64")}`;

    const asset = { bg, src };
    cache.set(url, asset);
    return asset;
  } catch {
    const fallback = { bg: "#f4f4f6", src: url };
    cache.set(url, fallback);
    return fallback;
  }
}
