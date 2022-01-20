import { FakeOptions, fake } from './core/core';
import { data } from './last-name.json';
import { randBoolean } from './boolean';
import { NameOptions } from './full-name';

/**
 * Generate a random last name.
 *
 * @category person
 *
 * @example
 *
 * randLastName()
 *
 * @example
 *
 * randLastName({ length: 10 })
 *
 */
export function randLastName<Options extends NameOptions>(options?: Options) {
  const withAccents = options?.withAccents ?? randBoolean();
  const names = withAccents ? data['withAccents'] : data['withoutAccents'];

  return fake(names, options);
}
