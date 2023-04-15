export function formatMoney(n) {
	const regex = /\d{1,3}(?=(\d{3})+(\.|$))/g // 替换规则
	n = String(Math.round(n * Math.pow(10, 2))) // 乘100 四舍五入
	let integer = n.substr(0, n.length - 2).replace(regex, '$&,') // 最后两位前的为整数
	let decimal = n.substr(n.length - 2) // 最后两位为小数
	const result = `${integer || 0}.${decimal}`
	return result
}
export function formatMoney4(n) {
	const regex = /\d{1,4}(?=(\d{4})+(\.|$))/g // 替换规则
	n = String(Math.round(n * Math.pow(10, 2))) // 乘100 四舍五入
	let integer = n.substr(0, n.length - 2).replace(regex, '$&|') // 最后两位前的为整数
	let decimal = n.substr(n.length - 2) // 最后两位为小数
	const result = `${integer || 0}.${decimal}`
	return result
}