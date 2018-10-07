// Todo: Make this usable :----)
export default (type, prefix) => {
    let classes = [];
    let configClasses = this.config[type];

    for (let classSuffix in configClasses) {
        let value = configClasses[classSuffix];
        let numericValue = typeof value === 'string' ? value.match(/(\d+)/, value) : 0;

        classes.push({
            type: type,
            value: value,
            class_prefix: prefix,
            class_suffix: classSuffix,
            numeric_value: parseFloat(value),
            className: value.toString().length ? [prefix, classSuffix].join('-') : prefix
        });
    }

    return classes
}