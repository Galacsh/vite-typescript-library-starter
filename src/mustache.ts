export type MData = { [k: string]: number | string | MData };

const MUSTACHE_VAR = /{{\s*([^}]+)\s*}}/g;

function mustache(template: string) {
  return {
    render: (data: MData) => {
      return template.replace(MUSTACHE_VAR, (_, key) => {
        return String(valueFrom(data, key.trim()));
      });
    },
  };
}

function valueFrom(obj: MData, path: string) {
  const parts = path.split(".");
  let val = obj;
  for (const part of parts) {
    val = val[part] as MData;
  }
  return val;
}

export default mustache;
