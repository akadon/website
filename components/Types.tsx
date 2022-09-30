

export const converter = (data: any) => {
  return {
    id: data.id,
    name: data.name,
    title: data.name,
    description: data.description,
    imageSrc: "/portfolio/" + data.name + "/Image.jpg",
    imageAlt: data.name + 'github url',
    linkSrc: data.url,
    linkAlt: data.name + 'github url',
  };
}
