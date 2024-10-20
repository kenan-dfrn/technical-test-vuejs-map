/**
 * Utility function to retrieve the size of an image.
 * @param imageUrl - URL of the image
 * @returns A promise that resolves with the image's width and height
 */
export const getImageSize = (imageUrl: string): Promise<{ width: number, height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    
    img.onerror = (error) => {
      reject(new Error('Error loading image'));
    };
    
    img.src = imageUrl;
  });
};