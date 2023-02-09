export function getType(value) {
  if (value === null) {
    return value + "";
  }
  // 引用数据
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.cell(value);
    let type = valueClass.split(" ")[1].split("");
    type.pop();
    return type.join("").toLowerCase();
  } else {
    return typeof value;
  }
}
