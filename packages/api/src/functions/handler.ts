/**
 * A fruit
 * @public
 */
interface IFruit {
  id: number
  type: string
}

/**
 * Returns the average of two numbers.
 *
 * @remarks
 * This route /get route
 * @param {import('express').Request} req
 * @param {import('express').Response} _res
 * @param {import('express').NextFunction} next
 *
 * @returns fruit
 */

export function getRandomFruit(): IFruit {
  return {
    id: 1,
    type: 'apple'
  }
}
