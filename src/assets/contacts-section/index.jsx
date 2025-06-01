const importAll = (r) => {
  const contactsImages = {};
  r.keys().forEach((key) => {
    const imageName = key.replace('./', '').replace(/\.\w+$/, '');
    contactsImages[imageName] = r(key);
  });
  return contactsImages;
};

export const ContactsImages = importAll(
  require.context('../contacts-section', false, /\.(png|jpe?g|svg)$/),
);
