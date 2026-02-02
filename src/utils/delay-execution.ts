const defaultDelayMs = 500;

/**
 * Delays the execution of a function by a specified number of milliseconds.
 * @param fn - The function to be executed. Can return a value or a Promise.
 * @param ms - The delay in milliseconds. Default is `500`ms.
 * @returns A Promise that resolves with the result of the given function (after the specified delay).
 */
export async function delayExecutionMs<T>(
  fn: () => T | Promise<T>,
  ms: number = defaultDelayMs
): Promise<T> {
  return new Promise((resolve) => {
    window.setTimeout(async () => {
      const result = await fn();
      resolve(result);
    }, ms);
  });
}
