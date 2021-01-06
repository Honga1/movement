function getParameterByName(name: string) {
  const url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return undefined;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
export function getUrlParameters(name: string, type: 'integer' | 'float'): number | undefined;
export function getUrlParameters(name: string, type: 'string'): string | undefined;
export function getUrlParameters(name: string, type: 'boolean'): boolean;
export function getUrlParameters(
  name: string,
  type: 'integer' | 'float' | 'string' | 'boolean',
): number | string | boolean | undefined {
  const maybeParam = getParameterByName(name);
  if (type === 'boolean') {
    return maybeParam === '';
  }
  if (maybeParam === undefined) return undefined;

  switch (type) {
    case 'integer':
      return parseInt(maybeParam, 10);
    case 'float':
      return parseFloat(maybeParam);
    case 'string':
      return maybeParam;
  }
}
