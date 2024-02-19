
export function extraerIdentificador( url ) {

    const match = url.match(/\/([^/?]+)\?/);

    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    };
};
