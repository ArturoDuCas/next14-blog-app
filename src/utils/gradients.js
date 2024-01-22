const gradients = [
  ['#FFC0CB', '#FFB6C1'],
  ['#FF69B4', '#FF1493'],
  ['#C71585', '#DB7093'],
  ['#FFA07A', '#FA8072'],
  ['#FF7F50', '#FF6347'],
  ['#FF4500', '#FF8C00'],
  ['#00FFFF', '#40E0D0'],
  ['#00CED1', '#48D1CC'],
  ['#1E90FF', '#00BFFF'],
  ['#0000FF', '#0000CD'],
  ['#8A2BE2', '#4B0082'],
  ['#800000', '#8B0000'],
  ['#B22222', '#FF0000'],
  ['#FAEBD7', '#FFE4C4'],
  ['#FFEBCD', '#F5DEB3'],
  ['#F5F5DC', '#FFE4B5'],
  ['#FFE4C4', '#FFE4C4'],
  ['#FFE4C4', '#FFDAB9'],
  ['#EEE8AA', '#F0E68C'],
  ['#FFFACD', '#FFF8DC'],
  ['#FFF8DC', '#F5F5F5'],
  ['#F5F5F5', '#F5F5F5'],
  ['#F5F5F5', '#FFFF00'],
  ['#FDF5E6', '#FAFAD2'],
  ['#FAF0E6', '#FAF0E6'],
];

const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
  }
  return hash;
};

export const getGradient = (postId) => {
  const index = Math.abs(hashString(postId)) % gradients.length;
  const gradient = gradients[index];
  return `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})`
};

