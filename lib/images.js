const { CMS_URL } = process.env;

const generateImageUrls = data => {
  if (data && Array.isArray(data)) {
    return generateImagesArry(data[0].images);
  }
  return null;
};

const generateImagesArry = images => {
  if (images && Array.isArray(images)) {
    let imagesArry = [];
    images.forEach(image => {
      imagesArry.push(`${CMS_URL}/${image.url}`);
    });
    return imagesArry;
  }
  return null;
};

export { generateImageUrls, generateImagesArry };
