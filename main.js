const structkit = require("structkit");

exports.logGreen = function (...args) {

    console.log("\x1b[32m"+structkit.toArray(structkit.getValue(args)).join(" ")+"\x1b[0m");

};

exports.logRed = function (...args) {

    
    console.log("\x1b[31m"+structkit.toArray(structkit.getValue(args)).join(" ")+"\x1b[0m");

};

exports.logWhite = function (...args) {

    console.log("\x1b[37m"+structkit.toArray(structkit.getValue(args)).join(" ")+"\x1b[0m");

};

exports.logBlack = function (...args) {

    console.log("\x1b[30m"+structkit.toArray(structkit.getValue(args)).join(" ")+"\x1b[0m");

};
exports.getCwdParameter = function (cwd) {

    const glb={};

    structkit.each(cwd, function (key, value) {

        const is_valid = (/^([-]{2})/g).test(value);

        if (is_valid) {

            const split_val = value.split("=");
            const split_key = split_val[0].replace(/^([-]{2})/g, "");

            if (split_val.length===1) {

                glb[split_key]=true;

            } else {

                glb[split_key]=structkit.toArray(structkit.getValue(structkit.limit(split_val, 1, split_val.length-1))).join("=");

            }

        }

    });

    return glb;

};
