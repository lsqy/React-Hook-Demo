function loader (source) {
    const time = new Date().toLocaleString()
    const { author = '' } = this.query || {}
    return `
        /**
         ** @author ${author}
         ** @time ${time}
         **/
        ${source}
    `
}

module.exports = loader