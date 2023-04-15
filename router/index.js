let Vue = null
// 存放当前路径，表示当前路径状态
class HistoryRoute {
    constructor() {
        this.current = null
    }
}

class VueRouter {
    constructor(options) {
        // 路由模式 默认hash
        this.mode = options.mode || 'hash'
        // 路由数组
        this.routes = options.routes || []
        // 将路由数组 转成 Map 格式
        this.routesMap = this.createMap(this.routes)
        this.history = new HistoryRoute()
        //  初始化、
        this.init()
    }
    init() {
        if (this.mode === "hash") {
            // 判断用户打开的时候有没有hash值 没有则跳转‘/’
            location.hash ? '' : location.hash = "/";
            window.addEventListener("load", () => {
                this.history.current = location.hash.slice(1)
            })
            window.addEventListener("hashchange", () => {
                this.history.current = location.hash.slice(1)
            })
        } else { //history
            location.pathname ? '' : location.pathname = "/"
            window.addEventListener('load', () => {
                this.history.current = location.pathname
            })
            window.addEventListener('popstate', () => {
                this.history.current = location.pathname
            })
        }
    }
    createMap(routes) {
        return routes.reduce((pre, current) => {
            pre[current.path] = current.component
            return pre
        }, {})
    }
}
VueRouter.install = function (v) {
    Vue = v
    Vue.mixin({
        beforeCreate() {
            // 判断是否为根组件
            if (this.$options && this.$options.router) { // 如过是根组件
                this._root = this // 把当前实例挂在到root 上
                this._router = this.$options.router
                Vue.util.defineReactive(this, "xxx", this._router.history)
            } else { //  如果是子组件
                this._root = this.$parent && this.$parent._root
            }
            Object.defineProperty(this, '$router', {
                get() {
                    return this._root._router
                }
            })
            Object.defineProperty(this, "$route", {
                get() {
                    return this._root._rooter.history.current
                }
            })
        },
    })
    Vue.component('router-link', {
        props: {
            to: String
        },
        render(h) {
            let mode = this._self._root._router.mode
            let to = mode === 'hash' ? '#' + this.to : this.to
            return h('a', { attrs: { href: to } }, this.$slots.default)
        }
    })
    Vue.component('router-view', {
        render(h) {
            let current = this._self._root._router.history.current
            let routeMap = this._self._root._router.routesMap
            return h(routeMap[current])
        }
    })
}

export default VueRouter

