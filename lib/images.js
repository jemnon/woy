const generateImageUrls = data => {
  const { includes } = data || {};
  const { Asset } = includes || {};
  if (Asset && Array.isArray(Asset)) {
    let images = [];
    Asset.forEach(item => {
      images.push(item.fields.file.url);
    });
    return images;
  }
  return null;
};

export default generateImageUrls;
