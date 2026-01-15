// Icon.spec.ts

import { IconMap, IconMapKeys } from './Icons.map';

describe('<Icon />', () => {
  it('should have the same icon keys in both lists', () => {
    expect(IconMapKeys).toEqual(Object.keys(IconMap));
  });
});
