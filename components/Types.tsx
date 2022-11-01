

export const converter = (data: any) => {
  return {
    id: data.id,
    name: data.name,
    title: data.name,
    description: process.env.VERCEL_URL != null ? "https://" + process.env.VERCEL_URL : "" + "/" + data.name + "README.md",
    imageSrc: process.env.VERCEL_URL != null ? "https://" + process.env.VERCEL_URL : "" + "/" + data.name + "Image.jpg",
    imageAlt: data.name + 'github url',
    linkSrc: data.html_url,
    linkAlt: data.name + 'github url',
  };
}
