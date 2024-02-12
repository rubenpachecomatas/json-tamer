const formatJson = (json: string) => JSON.stringify(JSON.parse(json), null, 4);

const minifyJson = (json: string) => JSON.stringify(JSON.parse(json));

export { formatJson, minifyJson };
