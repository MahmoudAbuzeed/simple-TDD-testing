
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s.length <= numRows || numRows < 2) return s;
    var num = 2 * (numRows - 1);
    var res = Array(numRows).fill("");
    var tmp = 0;
    for (var i = 0; i < s.length; i++) {
      tmp = i % num;
      tmp < numRows ? (res[tmp] += s[i]) : (res[num - tmp] += s[i]);
    }
    return res.join("");
  };
  
  console.log(convert("PAYPALISHIRING", 3)); //PAHNAPLSIIGYIR
  console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI
  console.log(convert("A", 1)) // return A
  console.log(convert("", 1)) // return ""

  
  export default convert;