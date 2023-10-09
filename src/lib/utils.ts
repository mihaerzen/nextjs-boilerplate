import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export async function delay(ms: number): Promise<void>
export async function delay<T>(promise: Promise<T>, ms: number): Promise<T>
export async function delay<T>(firstArg: Promise<T> | number, ms = 0) {
  let delayTime: number
  let promiseToAwait: Promise<T> | undefined

  if (typeof firstArg === 'number') {
    delayTime = firstArg
  } else {
    promiseToAwait = firstArg
    delayTime = ms
  }

  const delayPromise = new Promise((r) => setTimeout(r, delayTime))

  if (!promiseToAwait) return delayPromise

  const [resp] = await Promise.all([promiseToAwait, delayPromise])

  return resp
}
