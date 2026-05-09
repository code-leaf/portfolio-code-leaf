/**
 * 生年月日から現在の年齢を計算する
 *
 * @param {string} birthDateString - YYYY-MM-DD 形式の生年月日
 * @returns {number} 計算された年齢
 */
export const calculateAge = (birthDateString: string): number => {
  if (!birthDateString) return 0;

  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // 誕生日前であれば1引く
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
