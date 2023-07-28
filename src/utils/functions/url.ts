export const esURL = (input: string | undefined): boolean => {
  if (input === undefined) return false;
  const urlPattern = new RegExp(
    '^((https?|ftp)://)?' + // Protocolo
      '((([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)\\.)+[a-zA-Z]{2,}|' + // Dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // O dirección IP
      '(\\:\\d+)?(\\/[-a-zA-Z0-9%_.~+]*)*' + // Puerto y ruta
      '(\\?[;&a-zA-Z0-9%_.~+=-]*)?' + // Consulta
      '(\\#[-a-zA-Z0-9%_.~+=-]*)?$', // Fragmento
    'i',
  );

  return urlPattern.test(input);
};
